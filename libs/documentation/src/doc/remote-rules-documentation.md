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
https://pastebin.com/ebFBBQZh
```

You can add this link directly in the App and it will find the way to the raw content.

### [GitHub Gist](https://gist.github.com/)

Another simple way to host your rules is to use GitHub Gist.
You can only create a gist if you have a GitHub account, but you can also easily edit it later.
Gists are a great way to share code snippets and text files, and they are easy to use, but don'

You can create a gist with a single file and get a URL to it.
Be sure to make this gist public, otherwise the App will not be able to retrieve it.
The URL will look like this:

```text
https://gist.github.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20
```

Enter this URL in the App and it will automatically find the raw content.

Alternatively, to get the raw URL, click on the "Raw" button on the gist page.

Gists are also version controlled, so you can easily see previous revisions and revert to them if you want to.

A GitHub Gist also supports multiple files.
To use this feature with short links, you can supply the anchor-link to the file you want to use.
The anchor will look like this: `#file-my-file-name`.

```text
https://gist.github.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20#file-simple
```

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
https://github.com/dhhyi/travel-packlist-rules/blob/main/test-rules.txt
```

### [Google Drive](https://drive.google.com)

Google Drive is probably the easiest way to host your rules.
You will not have any overhead and you can easily edit the file in your drive.

To use Google Drive, you need to create a file in your drive and share it publicly.
Insert the link to the file in the App and it will automatically find the raw content.

The link will look like this:

```text
https://drive.google.com/file/d/1h4RWKrcL-glkQtc03AdLjPb3VNaUCs6T/view
```

## Other Sources

If you want to supply remote rules from a different source, you can do so as long as the server behind the
URL answers to the request with a plain text file containing the rules.
Watch out for links to the "raw" content.

For links in the web application, the server also has to allow CORS requests.

If you want to have your favorite source added to this list, please open an issue on GitHub and describe how the transformation works, or feel free to contribute the transformer yourself.
