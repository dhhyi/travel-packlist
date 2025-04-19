# Remote Rules

## About this Feature

With remote rules, you can define rules in a remote source and use them in this application.
It is the easiest way to use multiple sets of rules, instead of importing and exporting local rules all the time.
The downside of using remote rules is that you cannot edit the rules from the remote source in this application anymore.

## How to use Remote Rules?

On the settings page, you can enter an URL to a remote rules file.
The server behind the URL must answer to the request with a plain text file containing the rules.
This is sometimes also called a "raw" link, that is often undocumented or hard to find.

## Suggested Sources

<!-- cSpell:words Pastebin -->

### [Pastebin](https://pastebin.com)

Pastebin is a popular site for sharing text files.
Even without an account, you can create a paste and get a URL to it.
If you create a paste without an account, it will not be editable anymore, so make sure to create an account if you want to edit the paste later.

Once you are done creating the paste, you will get a link similar to this one:

```text
https://pastebin.com/LwSHKuGY
```

You can add this link directly in the App and it will find the way to the raw content.

There is also a link to the raw paste on the page if the app somehow fails to transform the URL automatically.

### [GitHub Gist](https://gist.github.com/)

Another simple way to host your rules is to use GitHub Gist.
You can only create a gist if you have a GitHub account, but you can also easily edit it later.
Gists are a great way to share code snippets and text files, and they are easy to use, but don'

You can create a gist with a single file and get a URL to it.
Be sure to make this gist public, otherwise the App will not be able to retrieve it.
The URL will look like this:

```text
https://gist.github.com/username/1234567890abcdef1234567890abcdef
```

Enter this URL in the App and it will automatically find the raw content.

Alternatively, to get the raw URL, click on the "Raw" button on the gist page.

Gists are also version controlled, so you can easily see previous revisions and revert to them if you want to.

A GitHub Gist also supports multiple files.
To use this feature with short links, you can supply the anchor-link to the file you want to use.
The anchor will look like this: `#file-my-file-name`.
Supplying the short link only works if the anchor is the same as the original filename (without 'file-').
You can alternatively supply the raw link yourself.

### [GitHub](https://github.com)

You can use a GitHub repository to host your rules.
Repositories are a great way to share code and text files for whole projects, but they come with some more overhead.
Choose this method to host your rules if you want to have multiple sets in the same source.
You can then also edit them easily with GitHub's native phone application or with a proper development checkout on your PC.
Be sure to make the repository public, otherwise the App will not be able to retrieve files from it.

After creating the repository with a file in it, you can get the raw URL to the file.
It will look like this:

```text
https://raw.githubusercontent.com/username/repository/branch/file
```

### [Google Drive](https://drive.google.com)

Google Drive is probably the easiest way to host your rules.
You will not have any overhead and you can easily edit the file in your drive.

To use Google Drive, you need to create a file in your drive and share it publicly.
Insert the link to the file in the App and it will automatically find the raw content.

This will only work in the Android App, as the browser application will encounter a CORS error.
