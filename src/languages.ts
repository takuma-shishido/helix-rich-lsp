export const RegexLangMap = {
  "(vercel|now)\\.json": "vercel",
  "\\.prettier((rc)|(\\.(toml|yml|yaml|json|js))?)$": "prettier",
  "\\.eslint((rc|ignore)|(\\.(json|js))?)$": "eslint",
  "\\.(now|vercel)ignore$": "vercel",
  "prettier\\.config\\.js$": "prettier",
  "vue\\.config\\.(js|ts)$": "vueconfig",
  "vite\\.config\\.(js|ts)$": "viteconfig",
  "vitest\\.config\\.(js|ts|mjs)$": "vitestconfig",
  "jest\\.config\\.(js|ts)$": "jest",
  "tailwind\\.config\\.(js|cjs|mjs|ts|cts|mts)$": "tailwind",
  "gatsby-(browser|node|ssr|config)\\.js$": "gatsbyjs",
  "webpack(\\.dev|\\.development|\\.prod|\\.production)?\\.config(\\.babel)?\\.(js|jsx|coffee|ts|json|json5|yaml|yml)$": "webpack",
  "^angular[^.]*\\.js$": "angular",
  "(\\.)?appveyor\\.yml$": "appveyor",
  "\\.(l?a|[ls]?o|out|s|a51|asm|axf|elf|prx|puff|z80)$": "assembly",
  "\\.((c([+px]{2}?)?-?)?objdump|bsdiff|bin|dat|pak|pdb)$": "assembly",
  "\\.gcode|\\.gco$": "assembly",
  "\\.rpy[bc]$": "assembly",
  "\\.py[co]$": "assembly",
  "\\.babelrc$": "babel",
  "\\.(exe|com|msi)$": "bat",
  "^(BUILD|WORKSPACE|\\.bzl|\\.bazel(rc)?|\\.s(tar|ky))$": "bazel",
  "^(\\.bowerrc|bower\\.json|Bowerfile)$": "bower",
  "\\.bf?$": "brainfuck",
  "\\.c$": "c",
  "(cargo\\.toml|cargo\\.lock)$": "cargo",
  "\\.cljs(cm)?$": "clojure",
  "^CMakeLists\\.txt$": "cmake",
  "\\.codeclimate\\.(yml|json)$": "codeclimate",
  "contenthook\\.config\\.(ts|cjs|mjs|js)$": "contenthook",
  "\\.c[+px]{2}$|\\.cc$": "cpp",
  "\\.h[+px]{2}$": "cpp",
  "\\.[it]pp$": "cpp",
  "\\.(tcc|inl)$": "cpp",
  "\\.e?cr$": "crystal",
  "\\.di?$": "d",
  "^(Dockerfile|docker-compose|\\.docker(file|ignore))$": "docker",
  "^docker-sync\\.yml$": "docker",
  "\\.(exs|l?eex)$": "elixir",
  "^mix\\.(exs?|lock)$": "elixir",
  "\\.([fF])(03|08|18|90|95)$": "fortran",
  "^Emakefile$": "erlang",
  "^rebar(\\.config)?\\.lock$": "erlang",
  "(\\.firebaserc|firebase\\.json)$": "firebase",
  "^Gemfile(\\.lock)?$": "gemfile",
  "^\\.git|^\\.keep$|\\.mailmap$": "git",
  "\\.(g|c)sc$": "gamescript",
  "\\.gv?y$": "groovy",
  "[Gg]runtfile\\.(js|coffee)$": "gruntfile",
  "\\.(hbs|handlebars|(mu)?stache)$": "handlebars",
  "\\.(hlsl|cginc|cg|shader|fx)$": "hlsl",
  "\\.(glsl|vert|frag|geom|tesc|tese|comp)$": "glsl",
  "\\.hx(ml)?$": "haxe",
  "\\.x?html?$": "html",
  "\\.(jil|jl)$": "julia",
  "\\.kt[ms]?$": "kotlin",
  "\\.l(i?sp)?$": "lisp",
  "\\.n[ly]$": "lisp",
  "\\.s([s]|(cm)|(exp))$": "lisp",
  "\\.([w]|(pd_))?lua$": "lua",
  "\\.luau$": "luau",
  "\\.rbx(?:lx|l|m|s)?$": "luau",
  "\\.(mk|mak|make)$": "makefile",
  "^BSDmakefile$": "makefile",
  "^GNUmakefile$": "makefile",
  "^makefile\\.sco$": "makefile",
  "^Kbuild$": "makefile",
  "^makefile$": "makefile",
  "^mkfile$": "makefile",
  "^\\.?qmake$": "makefile",
  "\\.(geo|topo)$": "manifest",
  "\\.pot?$": "manifest",
  "^pkginfo$": "manifest",
  "^mime\\.types$": "manifest",
  "^METADATA\\.pb$": "manifest",
  "/\\\\[/\\\\][-.\\w]+$": "manifest",
  "([/\\\\]|\\/)dev[-\\w]+\\1(?:[^/\\\\]+\\1)*(?!DESC|NOTES)(?:[A-Z][-A-Z]*)(?:\\.in)?$": "manifest",
  "\\.git/\\\\?(HEAD|ORIG_HEAD|packed-refs|logs/\\\\?[^/\\\\]+)$": "manifest",
  "\\.(md|mdown|markdown|mkd|mkdown|mdwn|mkdn|rmd|ron|pmd)$": "markdown",
  "\\.m$": "matlab",
  "\\.mm?$": "objective-c",
  "\\.eliom[i]?$": "ocaml",
  "\\.ml[4lyi]?$": "ocaml",
  "\\.pas(cal)?$": "pascal",
  "\\.p(wn)?$": "pawn",
  "\\.p(er)?l$": "perl",
  "\\.p([hm]|lx)$": "perl",
  "\\.(psgi|xs)$": "perl",
  "\\.[tp]6$|\\.6pl$": "perl",
  "\\.(pm6|p6m)$": "perl",
  "^Rexfile$": "perl",
  "\\.php([st\\d]|_cs)?$": "php",
  "\\.ps[md]?1$": "powershell",
  "\\.gypi?$": "python",
  "\\.py([wi3tp]|de)?$": "python",
  "\\.?(pypirc|pythonrc|python-venv)$": "python",
  "^(SConstruct|SConscript)$": "python",
  "^(Snakefile|WATCHLISTS)$": "python",
  "^wscript$": "python",
  "\\.(r|Rprofile|rsx|rd)$": "r",
  "\\.res?i?$": "reasonml",
  "\\.(rb|ru|ruby|erb|gemspec|god|mspec|pluginspec|podspec|rabl|rake|opal)$": "ruby",
  "^\\.?(irbrc|gemrc|pryrc|ruby-(gemset|version))$": "ruby",
  "^(Appraisals|(Rake|[bB]uild|Cap|Danger|Deliver|Fast|Guard|Jar|Maven|Pod|Puppet|Snap)file(\\.lock)?)$": "ruby",
  "\\.(jbuilder|rbuild|rb[wx]|builder)$": "ruby",
  "^rails$": "ruby",
  "\\.(sc|scala)$": "scala",
  "\\.s[ac]ss$": "scss",
  "\\.(sh|rc|bats|bash|tool|install|command)$": "shell",
  "^(\\.?bash(rc|[-_]?(profile|login|logout|history|prompt))|_osc|config|install-sh|PKGBUILD)$": "shell",
  "\\.(ksh|mksh|pdksh)$": "shell",
  "\\.zsh(-theme|_history)?$|^\\.?(antigen|zpreztorc|zlogin|zlogout|zprofile|zshenv|zshrc)$": "shell",
  "\\.fish$|^\\.fishrc$": "shell",
  "^\\.?(login|profile)$": "shell",
  "^(configure|config\\.(guess|rpath|status|sub)|depcomp|libtool|compile)$": "shell",
  "^/(private/)?etc/([^/]+/)*(profile$|nanorc$|rc\\.|csh\\.)$": "shell",
  "^\\.?cshrc$": "shell",
  "\\.(my)?sql$": "sql",
  "\\.(styl|stylus)$": "stylus",
  "\\.sv(h)?$": "systemverilog",
  "\\.tex(i)?$": "tex",
  "\\.mk[vi]i$": "tex",
  "^hyphen(ex)?\\.(cs|den|det|fr|sv|us)$": "tex",
  "\\.te?xt$": "text",
  "\\.i?nfo$": "text",
  "\\.(utxt|utf8)$": "text",
  ".*\\.d\\.ts$": "typescript-def",
  "\\.ya?ml$": "yaml",
  "^yarn(\\.lock)?$": "yarn",
  "\\.(tfvars|tf)$": "terraform",
  "\\.mojo$": "mojo",
}

const obj: [RegExp, string][] = Object.entries(RegexLangMap).map(([regex, lang]) => [new RegExp(regex), lang])

export function getLanguage(filename: string): string | null {
  for (const [regex, lang] of obj) {
    if (regex.exec(filename)) return lang
  }

  return null
}
