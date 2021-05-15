# Clue Note-Taker

This is a little app to assist in the note-taking process while playing the popular board game *[Clue](https://en.wikipedia.org/wiki/Cluedo)*.

The idea behind the app is meant to follow the following note-taking methodology, which is just what my familly uses when we play the game and its variants (editions and house rules will be different from table to table):

## An example game
Imagine a game table, starting with yourself (the player) and then proceeding clockwise with players Mary, Tom, Susan, Anthony, and Eloise. 3 of the 21 cards are placed in an envelope as 'the solution', and the remaining cards are dealt to the six players, each player having 3 cards. 

### Your hand
You look at the three cards you were dealt, the Conservatory, Mrs White, and the Hall. You take your note sheet, and mark down the three cards you know at the beginning of the game, as well as labelling each of the columns for the other players, so you can keep track of what you know about _their_ hands as well. If your game proceeds clockwise, you might have a game sheet that looks like this. 

![Beginning Clue Game Sheet](https://i.imgur.com/EiLuUt9.png)

The lefthand column is reserved for the information you're trying to discover about the unspoken seventh player, the solution. You know three of the cards that _can't_ be in the envelope, so you denote them with X's. You also know that none of the other players can have those cards, because _you_ have them, so you mark those spaces with X's as well. Blank spaces are for information you don't yet know. 

### Player Guesses
We'll say that play begins with you. After rolling some dice and moving your piece, you announce a Guess, that the murder was committed by Mr Green, in the Lounge, with the Rope. Play then continues to your left, where each player either confirms or denies that they can disprove your guess. 

Mary cannot disprove you, but this still tells you useful information. You know that she _doesn't_ have any of those three cards, and so you mark that down on your sheet. 

![Mary doesn't have first guess](https://i.imgur.com/el4Smyh.png)

Play continues like this all the way to Anthony, who announces he can Refute your Guess. He shows you that he has Mr Green. You don't know anything about what Eloise has, because play did not come to her, and you don't know if Anthony has more than one of the items you Guessed, because he's only required to show you one card. However, you _do_ know that none of the other players have Mr Green, because _Anthony_ has Mr Green.

However, you mark all of the information you learned from this round, for each of the people who _doesn't_ have the cards you Guessed, and the card information you _do_ have. 

![Player sheet after first guess](https://i.imgur.com/FVzRA7J.png)

### Opponent Guesses
The turn passes to Mary, who Guesses Col Mustard/Knife/Kitchen. Tom isn't able to refute her, but Susan is, and this tells you both that Tom has _none_ of those cards, and that Susan has _one_ of those cards, even if you don't know which one she has. Even though you weren't the one Guessing, you can still use your detective skills to deduce the truth!

![Susan might have something](https://i.imgur.com/9F2BMoW.png)

### Filling in the Blanks
By using this additional information, you can use various deductions to identify which cards a person has, by utilizing which cards you know they _don't_ have. Let's look at some examples. 

#### During a Refutation
It's Tom's turn to go next, and he Guesses Mrs White/Knife/Hall. The very next player, Susan, is able to refute him, and this gives you crucial information, even though it's not your turn to Guess! You know that she doesn't have Mrs White or the Hall, because you have both of those cards, which means that the only card she could use to Refute the Guess is the Knife! 

She _may_ also have Col Mustard or the Kitchen, but since you can't know for certain, those spaces become blank for now. You also know that, because Susan has the Knife, no one else does, and it's not in the envelope, so you can fill in your sheet accordingly. 

![Susan has the knife!](https://i.imgur.com/dN1Dv6c.png)

#### After a Refutation
Let's say that, after a few rounds of play, Eloise was able to refute a Guess of Miss Scarlett/Lead Pipe/Study, and therefore has one or more of those cards. 

![Eloise might have something](https://i.imgur.com/KriQWSF.png)

However, over the course of several Guesses, you're able to confirm that she does not have the Lead Pipe or the Study. Even though she isn't Refuting anything, you can retroactively deduce what card she has based on her previous Refutation! She could only have Refuted that previous Guess if she has Miss Scarlett, and so you update your sheet to reflect what you know she (and the other players) have.

![Eloise has Miss Scarlett!](https://i.imgur.com/eAnCMrn.png)

### Cracking the Case
By using this method, of identifying who does or does not have certain cards, you can piece together the clues necessary to deduce which cards are in the envelope. After several rounds of play, you deduce that none of the players (including yourself) has Prof Plum, the Lead Pipe, or the Dining Room. 

![You've found the solution!](https://i.imgur.com/IaKGXpa.png)

...which means, that those must be the cards in the envelope! It's your turn, and this time, you're not going to **Guess** anything... it's time to make an ***Accusation!***

## Is it cheating? 
It depends. Talk to the other players at your table, and ask if they're comfortable with you using a tool like this. Personally, I don't think it's cheating to use deductive reasoning in a game that's all about finding stuff out, and all that this tool does is automate the note-taking process, so the game isn't slowed down by everyone frantically scribbling 3 little X's every single time someone isn't able to Refute a Guess. 

This app tells you nothing about *which* Guesses to make, or *when* to make them, or how to bluff the other players regarding which information you do or don't have, and to my way of thinking, that's where the real strategy of *[Clue](https://en.wikipedia.org/wiki/Cluedo)* is. 
