import os
import re
from datetime import datetime

# Chemin du répertoire contenant les fichiers HTML
root_dir = './'

# Regex pour trouver la ligne de date dans le footer
footer_pattern_fr = re.compile(r'<p>Mis à jour le \d{2}/\d{2}/\d{4}</p>')
footer_pattern_en = re.compile(r'<p>Last updated on \d{2}/\d{2}/\d{4}</p>')

# Parcourir tous les fichiers HTML dans le répertoire et ses sous-répertoires
for subdir, _, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.html'):
            file_path = os.path.join(subdir, file)
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Obtenir la date de dernière modification depuis les métadonnées du fichier
            mod_time = os.stat(file_path).st_mtime
            mod_date = datetime.fromtimestamp(mod_time).strftime('%d/%m/%Y')
            
            # Mise à jour de la date pour la version française
            if 'Mis à jour le' in content:
                new_content = footer_pattern_fr.sub(f'<p>Mis à jour le {mod_date}</p>', content)
            # Mise à jour de la date pour la version anglaise
            elif 'Last updated on' in content:
                new_content = footer_pattern_en.sub(f'<p>Last updated on {mod_date}</p>', content)
            else:
                continue  # Si aucune date n'est trouvée, passer au fichier suivant

            # Sauvegarder les modifications si des changements ont été effectués
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Date mise à jour dans {file_path}: {mod_date}')
