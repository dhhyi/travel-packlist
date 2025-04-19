# Remote Rules

## About this Feature

With remote rules, you can define rules in a remote source and use them in this application.
It is the easiest way to use multiple sets of rules, instead of importing and exporting local rules all the time.
The downside of using remote rules is that you cannot edit the rules from the remote source in this application anymore.

## How to use Remote Rules?

On the settings page, you can enter an URL to a remote rules file.
The server behind the URL must answer to the request with a plain text file containing the rules.

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

To make it usable in this application, you need to change the URL to point to the raw paste.
You can do this by replacing `pastebin.com` with `pastebin.com/raw/` in the URL.
The final URL will look like this:

```text
https://pastebin.com/raw/LwSHKuGY
```

There is also a link to the raw paste on the page.

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

To get the raw URL, click on the "Raw" button on the gist page.
You can also manually change the URL to point to the raw gist by replacing `gist.github.com` with `gist.githubusercontent.com` and adding `/raw/` after the username.
The final URL will look like this:

```text
https://gist.githubusercontent.com/username/1234567890abcdef1234567890abcdef/raw
```

Gists are also version controlled, so you can easily see previous revisions and revert to them if you want to.

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
