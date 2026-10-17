#!/bin/sh

CURRENT_DIR=$(dirname -- "$(realpath -- "$0")")
PROFILE_NAME='Default'

cp "$CURRENT_DIR/Preferences" "$HOME/Library/Application Support/Vivaldi/$PROFILE_NAME/Preferences"
cp "$CURRENT_DIR/Secure Preferences" "$HOME/Library/Application Support/Vivaldi/$PROFILE_NAME/Secure Preferences"
