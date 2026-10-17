# System configuration (prerequisites)

To make `mods/apply_user_mods.sh` work on Mac, you must enable
System Settings -> Privacy & Security -> App Management -> enable Terminal or Intellij Idea to allow them to modify .app directories

You need to configure `python` to use `pip` if you didn't before
```sh
python3 -m venv "$HOME/.venv"
echo "source $HOME/.venv/bin/activate" >> "$HOME/.zshrc"
```

Then install the `lxml` package
```sh
pip install lxml
```

Apply a browser window mod
```sh
./mods/apply_user_mods.sh
```

Apply browser preferences
```sh
./preferences/apply_preferences.sh
```
