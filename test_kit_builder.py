import json

# Let's verify we have details for all 12 solutions
solutions_keys = [
    'corp-wifi', 'biz-fibre', 'sd-wan',
    'central-fw', 'csoc-service',
    'm365-suite', 'cloud-pc', 'ais-oci',
    'backup-dr',
    'sme-mpbx', 'smart-vision', 'smart-logistics'
]
print(f"Total solution keys: {len(solutions_keys)}")
