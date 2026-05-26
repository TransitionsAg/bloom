{
  description = "Bun development shell";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    git-hooks-nix.url = "github:cachix/git-hooks.nix";
    git-hooks-nix.inputs.nixpkgs.follows = "nixpkgs";
    import-tree.url = "github:denful/import-tree";
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    skills-parts.url = "github:Shyrogan/skills-parts";
    skills-parts.inputs.git-hooks-nix.follows = "git-hooks-nix";
    skills-parts.inputs.treefmt-nix.follows = "treefmt-nix";
    treefmt-nix.url = "github:numtide/treefmt-nix";
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake {inherit inputs;}
    (inputs.import-tree ./flake);
}
