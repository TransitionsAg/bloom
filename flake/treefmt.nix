{inputs, ...}: {
  imports = [inputs.treefmt-nix.flakeModule];

  perSystem = {
    config,
    ...
  }: {
    treefmt = {
      programs.alejandra.enable = true;
    };

    formatter = config.treefmt.build.wrapper;
  };
}
