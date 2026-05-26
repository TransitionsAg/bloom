{inputs, ...}: {
  imports = [inputs.git-hooks-nix.flakeModule];

  perSystem = {
    config,
    pkgs,
    ...
  }: {
    pre-commit.settings.hooks.treefmt = {
      enable = true;
      package = config.treefmt.build.wrapper;
    };

    devShells.default = pkgs.mkShell {
      shellHook = ''
        ${config.pre-commit.shellHook}
        ${config.skills.shellHook}
      '';
      buildInputs = config.skills.enabledPackages;
      packages =
        [pkgs.nodejs pkgs.pnpm]
        ++ config.pre-commit.settings.enabledPackages;
    };
  };
}
