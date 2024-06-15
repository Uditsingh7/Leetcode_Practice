https://ps.w.org/disqus-comment-system/assets/screenshot-1.png?rev=2454107


Design a pluggable commenting system 

1. 3 Level comments
2. Sort by recency/popularity
3. upvotes/downvotes

Page should load fast.


1. POST comment api:

payload=> {
	postid,
	comment
	}
added a comment

POST=>
Comment=>
response =>{
	id,
	postid,
	textComment,
	parentCommentId: null,
	}

Post a up/down vote =>{
baseurl/vote
payload =>{
	commentId,
	vote:true/false
	}

----------------

get list of comments = >
method=> get
url=> baseurl/comments?filter&sortBy=

[
{id, createdAt, upVoteCount, downVoteCount},{},{},{}
]

1. sort=> date =>asc/desc
2. sort => difference of vote




-------------------------

user => userId => generate token


---------------------------

mongodb=>

schema User =>{
...loginCreds
}
collectionName=> User
-------
schema Comments =>{
id,
parentCommentId,
textComment,
upvoteCount/downvoteCount,
...
}
-------
collection Voted =>{
	userId,
	commentId,
	voted: true/false
	}





collectionName=>Comments


relation with User


-------------get comments response
[
{id,
textComment,
up/downCount,
},
{id,
textComment,
up/downCount,
},
{id,
textComment,
up/downCount,
replyCount:
}

]


--------

1st=> 100
each 1st comment has 10 comments/avg
each 2nd comments has 2 comments/avg

-----


1. sam commented on pamella => insert new comment/update parent reply Count
