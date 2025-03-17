import tomllib
import tomli_w
import requests

file_path = './languages.toml'
url = 'https://raw.githubusercontent.com/helix-editor/helix/master/languages.toml'

response = requests.get(url)
response.raise_for_status()

with open(file_path, 'wb') as file:
    file.write(response.content)

with open(file_path, 'rb') as file:
    data = tomllib.load(file)

output = {
    'language-server': {
        'discord-rich-lsp': {
            'command': 'discord-rich-lsp',
            'args': ['--stdio'],
            'config': {
                'applicationId': "1330779433946189906",
                'baseIconsUrl': "https://raw.githubusercontent.com/takuma-shishido/helix-discord-presence/main/assets/icons/",
                'state': "Working on {filename}",
                'details': "In {workspace}",
                'largeImage': "{base_icons_url}/{language}.png",
                'largeText': "{language:u}",
                'smallImage': "{base_icons_url}/helix.png",
                'smallText': "Helix",
                'viewRepository': True,
            }
         }
    },
    'language': []
}

if 'language' in data:
    for lang in data['language']:
        if 'language-servers' in lang:
            lang['language-servers'].append("discord-rich-lsp")
        else:
            lang['language-servers'] = ["discord-rich-lsp"]
            
        output['language'].append({
            'name': lang['name'],
            'language-servers': lang['language-servers']
        })

with open(file_path, 'wb') as file:
    file.write(b"# For Discord Presence\n")
    tomli_w.dump(output, file)
