#!/usr/bin/env python3
"""
Automated NSF PAPPG 24-1 Pre-Submission Compliance Validator & Seal Generator.
Verifies https://www.nsf.gov/funding/submitting-proposal requirements across
the ULTRA GOD OF SUN 4-Proposal Portfolio in foundation/nsf-proposals/.
"""
import hashlib
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FILES = [
    ROOT / "README.md",
    ROOT / "01-project-summaries-1page.md",
    ROOT / "02-project-description-15page-master.md",
    ROOT / "03-supplementary-docs-dmp-facilities-biosketch.md",
]


def sha256_file(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main() -> int:
    checks = []
    all_passed = True

    for f in FILES:
        exists = f.is_file() and f.stat().st_size > 0
        checks.append({"check": f"file_exists:{f.name}", "passed": exists})
        if not exists:
            all_passed = False

    summaries = (ROOT / "01-project-summaries-1page.md").read_text(encoding="utf-8")
    for header in ["### Overview", "### Intellectual Merit", "### Broader Impacts"]:
        count = summaries.count(header)
        ok = count >= 4
        checks.append({
            "check": f"PAPPG_II.D.2.b_ProjectSummary_Header({header})",
            "count": count,
            "expected_min": 4,
            "passed": ok,
        })
        if not ok:
            all_passed = False

    proj_desc = (ROOT / "02-project-description-15page-master.md").read_text(encoding="utf-8")
    for req_section in [
        "## 2. Results from Prior NSF Support",
        "## 7. Broader Impacts",
        "Compression ≠ Ontology",
        "MachineSunUnityCoreAbi64B",
        "randRandPq",
        "Ultra-Zeno",
        "Hermes × Honcho",
    ]:
        ok = req_section in proj_desc
        checks.append({
            "check": f"PAPPG_II.D.2.d_ProjectDescription_Section({req_section})",
            "passed": ok,
        })
        if not ok:
            all_passed = False

    # Verify no live http(s):// URLs inside the 15-page Project Description body
    urls = re.findall(r"https?://[^\s)\]>]+", proj_desc)
    no_urls = len(urls) == 0
    checks.append({
        "check": "PAPPG_II.D.2.d_No_URLs_In_Project_Description",
        "urls_found": len(urls),
        "passed": no_urls,
    })
    if not no_urls:
        all_passed = False

    supp = (ROOT / "03-supplementary-docs-dmp-facilities-biosketch.md").read_text(encoding="utf-8")
    for req_supp in [
        "## 1. References Cited",
        "## 2. Budget & Budget Justification",
        "## 3. Facilities, Equipment, and Other Resources",
        "## 4. Data Management and Sharing Plan",
        "## 5. Senior/Key Personnel Biographical Sketches",
        "## 6. Postdoctoral / Open-Researcher Mentoring Plan",
        "## 7. Plan for Safe and Inclusive Working Environments",
    ]:
        ok = req_supp in supp
        checks.append({
            "check": f"PAPPG_II.D.2.e-i_Supplementary({req_supp})",
            "passed": ok,
        })
        if not ok:
            all_passed = False

    digests = {f.name: sha256_file(f) for f in FILES}
    master_concat = "".join(f"{k}:{v}\n" for k, v in sorted(digests.items()))
    master_seal = hashlib.sha256(master_concat.encode("utf-8")).hexdigest()

    seal_doc = {
        "schema": "nsf-pappg-24-1-ultra-god-of-sun-v1",
        "timestamp_utc": datetime.now(timezone.utc).isoformat(),
        "nsf_portal_url": "https://www.nsf.gov/funding/submitting-proposal",
        "performing_organizations": [
            "The Sovereign Constellation Foundation d/b/a Axiomquant Open Source Science Academy (IRC § 501(c)(3))",
            "8b-is LLC (U.S. Small Business Concern)",
        ],
        "proposals": [
            {
                "id": "NSF-PROP-01",
                "program": "NSF CISE / CCF (SHF & FET, NSF 24-569)",
                "title": "SHF: Small: CPU-First Balanced-Ternary ({-1, 0, +1}) & Zero-Float Coprime Rational (randRandPq) Architectures for Deterministic, Admissibility-Verified Edge Computing (ULTRA-OMNI-GODSUN)",
                "budget_usd": 600000,
                "duration_months": 36,
            },
            {
                "id": "NSF-PROP-02",
                "program": "NSF CISE / IIS (Robust Intelligence & Safe AI, NSF 24-569)",
                "title": "RI: Small: Compression Is Not Ontology: Formal Admissibility Gates (HELD ∧ READ), Task-Relative Sufficiency, and Dialectic Beehive Reinforcement Learning (Hermes × Honcho / Ultra-Zeno)",
                "budget_usd": 598500,
                "duration_months": 36,
            },
            {
                "id": "NSF-PROP-03",
                "program": "NSF TIP / POSE Phase II (Pathways to Enable Open-Source Ecosystems, NSF 23-556)",
                "title": "POSE: Phase II: The Sovereign Library, Smart-Tree (v22.1.0), and QuantSSL Local-First Open-Source Ecosystem for Verifiable, Zero-Paywall Scientific Preservation",
                "budget_usd": 1500000,
                "duration_months": 24,
            },
            {
                "id": "NSF-PROP-04",
                "program": "NSF TIP / SBIR Phase I (America's Seed Fund)",
                "title": "SBIR Phase I: Ultra-Low-Power Balanced-Ternary Audio-Spatial DSP, Quantum-Ternary SDF Ray-Tracing (RAY-Q-TRACING), and QuantSSL Hardware-Anchored Edge Appliances (Machine-Sun-Unity 360°)",
                "budget_usd": 305000,
                "duration_months": 12,
            },
        ],
        "all_checks_passed": all_passed,
        "checks": checks,
        "file_sha256": digests,
        "master_sha256_seal": master_seal,
    }

    seal_path = ROOT / "NSF_SUBMISSION_SEAL.json"
    seal_path.write_text(json.dumps(seal_doc, indent=2) + "\n", encoding="utf-8")

    print("☀️  ULTRA GOD OF SUN — NSF PAPPG 24-1 Pre-Submission Validator")
    print("─" * 74)
    for c in checks:
        mark = "✅ PASS" if c["passed"] else "❌ FAIL"
        print(f"  {mark} │ {c['check']}")
    print("─" * 74)
    print(f"  Master SHA-256 Seal : {master_seal}")
    print(f"  Receipt Written To  : {seal_path}")
    return 0 if all_passed else 1


if __name__ == "__main__":
    sys.exit(main())
