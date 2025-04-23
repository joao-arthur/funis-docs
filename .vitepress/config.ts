import { defineConfig } from "vitepress";

export default defineConfig({
    title: "funis",
    base: "/funis",
    description: "A VitePress Site",
    themeConfig: {
        sidebar: [
            {
                text: "arr",
                items: [
                    { text: "unique", link: "/arr/unique" },
                    { text: "once", link: "/arr/once" },
                    { text: "disjoint", link: "/arr/disjoint" },
                    { text: "intersect", link: "/arr/intersect" },
                    { text: "groupToEntries", link: "/arr/group-to-entries" },
                    { text: "groupToArray", link: "/arr/group-to-array" },
                    { text: "groupToMap", link: "/arr/group-to-map" },
                    { text: "groupToObject", link: "/arr/group-to-object" },
                    { text: "combinate", link: "/arr/combinate" },
                    { text: "random", link: "/arr/random" },
                    { text: "repeat", link: "/arr/repeat" },
                ],
            },
            {
                text: "cb",
                items: [
                    { text: "eq", link: "/cb/eq" },
                    { text: "ne", link: "/cb/ne" },
                    { text: "gt", link: "/cb/gt" },
                    { text: "ge", link: "/cb/ge" },
                    { text: "lt", link: "/cb/lt" },
                    { text: "le", link: "/cb/le" },
                ],
            },
            {
                text: "chr",
                items: [
                    { text: "debounce", link: "/chr/debounce" },
                    { text: "throttle", link: "/chr/throttle" },
                ],
            },
            {
                text: "map",
                items: [
                    { text: "mapEntries", link: "/map/map-entries" },
                    { text: "mapKeys", link: "/map/map-keys" },
                    { text: "mapValues", link: "/map/map-values" },
                    { text: "entries", link: "/map/entries" },
                    { text: "keys", link: "/map/keys" },
                    { text: "values", link: "/map/values" },
                    { text: "fromObject", link: "/map/from-object" },
                    { text: "fromObjectArray", link: "/map/from-object-array" },
                ],
            },
            {
                text: "num",
                items: [
                    { text: "clamp", link: "/num/clamp" },
                    { text: "parse", link: "/num/parse" },
                    { text: "range", link: "/num/range" },
                    { text: "lazyRange", link: "/num/lazy-range" },
                    { text: "isValid", link: "/num/is-valid" },
                    { text: "random", link: "/num/random" },
                    { text: "compareAsc", link: "/num/compare-asc" },
                    { text: "compareDesc", link: "/num/compare-desc" },
                    { text: "normalizeZero", link: "/num/normalize-zero" },
                    { text: "toFixed", link: "/num/to-fixed" },
                ],
            },
            {
                text: "obj",
                items: [
                    { text: "mapEntries", link: "/obj/map-entries" },
                    { text: "mapKeys", link: "/obj/map-keys" },
                    { text: "mapValues", link: "/obj/map-values" },
                    { text: "serialize", link: "/obj/serialize" },
                    { text: "serializesToSame", link: "/obj/serializes-to-same" },
                    { text: "fromMap", link: "/obj/from-map" },
                    { text: "pick", link: "/obj/pick" },
                    { text: "omit", link: "/obj/omit" },
                    { text: "disjoint", link: "/obj/disjoint" },
                    { text: "intersect", link: "/obj/intersect" },
                ],
            },
            {
                text: "prm",
                items: [
                    { text: "last", link: "/prm/last" },
                    { text: "resolveTimeout", link: "/prm/resolve-timeout" },
                    { text: "rejectTimeout", link: "/prm/reject-timeout" },
                    { text: "objectify", link: "/prm/objectify" },
                    { text: "retry", link: "/prm/retry" },
                ],
            },
            {
                text: "std",
                items: [
                    { text: "compose", link: "/std/compose" },
                    { text: "pipe", link: "/std/pipe" },
                    { text: "self", link: "/std/self" },
                ],
            },
            {
                text: "str",
                items: [
                    { text: "camelCase", link: "/str/camel-case" },
                    { text: "pascalCase", link: "/str/pascal-case" },
                    { text: "kebabCase", link: "/str/kebab-case" },
                    { text: "snakeCase", link: "/str/snake-case" },
                    { text: "replaceAccentuation", link: "/str/replace-accentuation" },
                    { text: "removeAccentuation", link: "/str/remove-accentuation" },
                    { text: "isValid", link: "/str/is-valid" },
                    { text: "random", link: "/str/random" },
                    { text: "compareAsc", link: "/str/compare-asc" },
                    { text: "compareDesc", link: "/str/compare-desc" },
                ],
            },
            {
                text: "types",
                items: [
                    { text: "plainObject", link: "/types/plain-object" },
                ],
            },
            {
                text: "changelog",
                items: [
                    { text: "v1.1.0", link: "/changelog/v1.1.0" },
                    { text: "v1.1.1", link: "/changelog/v1.1.1" },
                    { text: "v1.2.0", link: "/changelog/v1.2.0" },
                ],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/joao-arthur/funis-deno" },
            { icon: "github", link: "https://github.com/joao-arthur/funis-node" },
        ],
    },
});
