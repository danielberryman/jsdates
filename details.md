My current problem is if I generate a random date the timezone the user is in will effect that date with adjustments unique to that timezone.
So for eastern timezone some dates will come back as EDT and some as EST.
What I need to do is determine what the current offset is from UTC and anticipate this for the user so they can submit the correct time that will be returned.
I could simply only support EST and EDT?
And then I was thinking I could support PRs to add different time zones offsets for different times of the year.
At first I think this should only be visual and not impact code at all.
For example let's say the generator returns the following:
- let date = new Date("2020T16:11:17Z")
- This will return the local timestamp which will be 5 hours prior because at this date in the year eastern timezone is on EST
Another example would be this:
- let date = new Date("2020-05-31T16:11:17Z")
- This will return the local timestamp which will be 4 hours prior because at this date in the year eastern timezone is on EDT