---
sidebar_position: 10
---

# Custom globs for npm dev/build

Creating custom dynamic globs for your `npm run dev` or -`build` commands can be very convenient. 
- When you have for example a lot of units that you don't want to run all at the same time. 
- When you just want to build a specific set of banners. 
- Or when you just want to automatically sort your banners without having to update your saved commands each time. 

The globs are set up next to your `dev` and `build` commands in your `package.json` of your project. You can give them whatever name fits.

#### Examples:
Below script only gets the 300x250 `.richmediarc` files, for running on your dev server, since it is filtering the 300x250 folder.
```json title="package.json"
"scripts": {
    "dev:300x250": "dds --mode development  --glob **/**/300x250/.richmediarc"
},
```
Or alternatively you could use a wildcard at the end to catch not only `.richmediarc` but also `.richmediarc.nl` for example. 
```json title="package.json"
"scripts": {
    "dev:300x250": "dds --mode development  --glob **/**/300x250/.*"
},
```
Below script only gets the `.richmediarc.regular` units, for running on your dev server, but is checks all size folders due to the `**` wildcard.
```json title="package.json"
"scripts": {
    "dev:regular": "dds --mode development  --glob **/**/**/.richmediarc.regular",
},
```

Below script is to build every `.richmediarc.*` file, `.richmediarc.fr` and `.richmediarc.nl`, excluding anything that ends with `de`.
```json title="package.json"
"scripts": {
 "dev:en": "dds --mode production  --glob **/**/.richmediarc.*[!de]",
},
```


:::important
Globs currently only work with sorting out local `.richmediarc` files. For dynamically created spreadsheet .richmediarc files, you can't read their names out in order to filter them. But you could alternatively use a spreadsheet filter in the .shardrc file to make that happen.
:::