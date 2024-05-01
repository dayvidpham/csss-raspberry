{
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = inputs@{ self, nixpkgs, flake-utils, ... }: 
    flake-utils.lib.eachDefaultSystem (system:
    let
        pkgs = nixpkgs.legacyPackages.${system};
        nodePkgs = pkgs.nodejs_18.pkgs;

        nativeBuildInputs = [
          pkgs.nodejs_18
        ];
    in {
        devShells.default = pkgs.mkShell {
            inherit nativeBuildInputs;
            shellHook = ''
              echo "node `node --version`"
              echo "npm `npm --version`"
            '';
        };

        packages.default = pkgs.buildNpmPackage rec {
            pname = "csss-raspberry";
            version = "1.2.0";
            src     = ./.;

            inherit nativeBuildInputs;
            buildPhase = ''
              runHook preBuild
              
              mkdir -p $out/
              npm run build
              cp -r ./dist $out/dist

              runHook postBuild
            '';

            nodejs = pkgs.nodejs_18;
            # The prepack script runs the build script, which we'd rather do in the build phase.
            # npmPackFlags = [ "--ignore-scripts" ];
            npmDepsHash = "sha256-zbxANKssh26Oqk4IcojsX86sQTI9fJJky9cK816ylko=";
            npmDeps = pkgs.importNpmLock {
              npmRoot = ./.;
            };
            npmConfigHook = pkgs.importNpmLock.npmConfigHook;
        };
    });
}
