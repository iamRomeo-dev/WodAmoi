import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
//confirmer to delete
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
//EO confirmer to delete

const Post = ({ post, setCurrentId }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  // Fonction Likes avec le mot like à coté du chiffre
  // const Likes = () => {
  //   if (post.likes.length > 0) {
  //     return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
  //       ? (
  //         <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
  //       ) : (
  //         <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
  //       );
  //   }

  //   return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  // };
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? ` ${post.likes.length - 1} ` : `${post.likes.length}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? '' : ''}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;</>;
  };

  //confirmer to delete
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
//EO confirmer to delete

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://thumbs.dreamstime.com/b/gum-weight-dumbbell-cartoon-icon-hand-drawing-sketch-vector-illustration-32179189.jpg'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h9">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        {/* <Typography variant="body2" style={{textTransform: "uppercase"}}>{post.team}</Typography> */}
      </div>
      {/* Update */}
      {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )} */}
      {/* <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div> */}
      <Typography className={classes.title} style={{textTransform: "uppercase"}} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message.split("\n").map((str) => (<p>{str}</p>))}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </Button>
        <div>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <Button size="small" color="secondary" onClick={handleClickOpen}>
              <DeleteIcon fontSize="small" /> 
            </Button> 
            )}
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              <p>Are you sure to delete?</p>
              <div className={classes.root} style={{display: "flex",
                alignItems: "center",
                justifyContent: "center"}}>
                <Button variant="contained"  color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                  Delete
                </Button>
              </div>
            </DialogTitle>  
          </Dialog>
        </div>

         
          
      </CardActions>
      {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <p>
            ahahahaha
          </p>
          )} */}
    </Card>
  );
};

export default Post;