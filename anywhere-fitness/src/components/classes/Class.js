import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { deleteClass, instructorClasses } from '../actions/InstructorActions';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';;

const styles = theme =>({
    card: {
      maxWidth: 345,
      margin: theme.spacing(1)
    },
    buttonsection: {
      display: 'flex',
      justifyContent: 'center',
    },
    link: {
        textDecoration: 'none',
    },
    cardaction: {
        height: '215px'
    }
  })

class Class extends React.Component {

    deleteHandler = (event) => {
        event.preventDefault()
        this.props.deleteClass(this.props.instructorclass.classId)
            .then(() => {
                this.props.instructorClasses(this.props.match.params.id)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        console.log("Class", this.props)
        const { classes } = this.props;
        return (
            <div className="class">
                <Card className={classes.card}>
                    <CardActionArea className={classes.cardaction}>
                        <CardContent>
                            <Typography gutterBottom component="h2" variant="h6">
                                <b>{this.props.instructorclass.className}</b>
                            </Typography>
                            <Typography gutterBottom component="h2" variant="body1">
                                <b>Description:</b> {this.props.instructorclass.description}
                            </Typography>
                            <Typography gutterBottom component="h2" variant="body1">
                                <b>Address:</b> {`${this.props.instructorclass.address}, ${this.props.instructorclass.city}, ${this.props.instructorclass.state}  ${this.props.instructorclass.zipcode}`} 
                            </Typography>
                            <Typography gutterBottom component="h2" variant="body1">
                                <b>Date:</b> {this.props.instructorclass.date}
                            </Typography>
                            <Typography gutterBottom component="h2" variant="body1">
                                <b>Time:</b> {this.props.instructorclass.time}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.buttonsection}>
                    <Link to={`/instructor/dashboard/class/edit/${this.props.instructorclass.classId}`}><Button size="small" color="primary">Edit</Button></Link>
                        <Button size="small" color="secondary" onClick={this.deleteHandler}>Delete</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteClass,
    instructorClasses,
}

export default withRouter(connect(null, mapDispatchToProps)(withStyles(styles)(Class)));