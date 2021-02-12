import React, { useState } from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId, post }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const [search, setSearch] = useState("");

  // const user = JSON.parse(localStorage.getItem('profile'));

  //search filter bar
  const filteredTasks = posts.filter((mvt) => {
    return (mvt.message.toLowerCase().includes(search.toLowerCase()) 
      || mvt.title.toLowerCase().includes(search.toLowerCase()) 
      || mvt.team.toLowerCase().includes(search.toLowerCase()) 
      || mvt.duration.toLowerCase().includes(search.toLowerCase())
      || mvt.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    !posts.length ? <CircularProgress style={{marginLeft: "auto",
    marginRight: "auto", marginTop: "100px"}}/> : (
    <>
      {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && ( */}
        <form className={classes.root} noValidate autoComplete="off" style={{marginLeft: "auto",
          marginRight: "auto", marginBottom: "20px"}}>
        <TextField id="outlined-basic" label="Search" variant="outlined" onChange= {(e) => setSearch(e.target.value)}/>
        </form> 
      {/* )} */}

      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {filteredTasks
          .map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
        ))}
      </Grid>
    </>
    )
  );
};

export default Posts;