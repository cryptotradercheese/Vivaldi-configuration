#!/bin/sh

MOD_FILENAME='custom.js'
CURRENT_DIR=$(dirname -- "$(realpath -- "$0")")

cp "$CURRENT_DIR/$MOD_FILENAME" '/Applications/Vivaldi.app/Contents/Frameworks/Vivaldi Framework.framework/Versions/Current/Resources/vivaldi/'
python "$CURRENT_DIR/patch_window_html.py" '/Applications/Vivaldi.app/Contents/Frameworks/Vivaldi Framework.framework/Versions/Current/Resources/vivaldi/window.html' "$MOD_FILENAME"
