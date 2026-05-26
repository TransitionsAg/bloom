{inputs, ...}: {
  imports = [inputs.skills-parts.flakeModules.default];

  perSystem = {...}: {
    skills = [inputs.skills-parts.skills];
  };
}
