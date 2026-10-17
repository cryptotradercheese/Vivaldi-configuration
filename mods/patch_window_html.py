import sys
from lxml import etree, html

html_filepath = sys.argv[1]
mod_filename = sys.argv[2]
tree = html.parse(html_filepath, html.HTMLParser(default_doctype=False))
body = tree.xpath("/html/body")[0]

# skip if it's already there
if not tree.xpath(f'//script[@src="{mod_filename}"]'):
    body.append(html.Element("script", src=mod_filename))

etree.indent(tree, space="  ")
tree.write(html_filepath, method="html", encoding="utf-8", doctype=tree.docinfo.doctype, pretty_print=True)
