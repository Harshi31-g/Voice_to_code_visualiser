import json
import os

def load_locale(code, base_dir=os.path.join(os.path.dirname(__file__), '..', 'i18n')):
    path = os.path.join(base_dir, f"{code}.json")
    try:
        with open(path, 'r', encoding='utf-8') as fh:
            return json.load(fh)
    except Exception:
        return {}
