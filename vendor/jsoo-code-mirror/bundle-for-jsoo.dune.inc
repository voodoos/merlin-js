(rule
 (deps (source_tree %{project_root}/node_modules))
 (target bundle-es6.js)
 (action
  (run %{project_root}/node_modules/esbuild/bin/esbuild %{dep:includes.js} --bundle --outfile=%{target})))

(rule
 (deps
  %{project_root}/package.json
  %{project_root}/babel.config.js
  (source_tree %{project_root}/node_modules))
 (target bundle.js)
 (mode promote)
 (action
  (run %{project_root}/node_modules/@babel/cli/bin/babel.js %{dep:bundle-es6.js} --config-file %{project_root}/babel.config.js
   -o %{target})))
