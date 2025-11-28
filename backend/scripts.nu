export def loadenv [path] {
    open $path | from toml | load-env
}
