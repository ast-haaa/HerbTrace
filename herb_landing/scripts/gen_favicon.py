import base64

with open('public/images/leaf-logo-256.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <image href="data:image/png;base64,{b64}" x="0" y="0" width="256" height="256" />
</svg>
'''

with open('public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg)

print('Updated public/favicon.svg successfully!')
