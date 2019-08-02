import React from 'react';
import { connect } from 'react-redux';
import { createClass, instructorClasses } from '../actions/InstructorActions';
import { withRouter } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 900,
        margin: 'auto',
      },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
})

class ClassesCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: "",
            city: "",
            className: "",
            date: null,
            description: "",
            instructorId: this.props.instructorId,
            state: "",
            time: "",
            zipcode: "",
            categoryId: 1
        }
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const { address, city, className, date, description, instructorId, state, time, zipcode, categoryId } = this.state
        this.props.createClass({ instructor_id: instructorId, category_id: categoryId, name: className, address: address, city: city, state: state, zipcode: zipcode, date: date, time: time, description: description, })
            .then(() => {
                this.props.instructorClasses(this.props.match.params.id)
            })
            .catch((err) => {
                console.log(err)
            })
        this.setState({ 
            address: '',
            city: '',
            className: '',
            date: null,
            description: '',
            fullname: '',
            state: '',
            time: '',
            zipcode: '',
            categoryId:'',
        })
    }

    render() {
        console.log("Create", this.state)
        const { classes } = this.props 
        return (
            <div className="create-class">
                <h3>Create a Class</h3>
                <form onSubmit={this.submitHandler} className={classes.root}>
                    <FormControl required className={classes.formControl}>
                    <Input type="text" name="className" placeholder="Enter the name of your class" value={this.state.className} onChange={this.changeHandler} required />
                    <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                    <Input type="text" name="description" placeholder="Enter your class description" value={this.state.description} onChange={this.changeHandler} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                    <Input type="text" name="address" placeholder="Street" value={this.state.address} onChange={this.changeHandler} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                    <Input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.changeHandler} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                    <Input type="text" name="state" placeholder="State" value={this.state.state} onChange={this.changeHandler} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                    <Input type="text" name="zipcode" placeholder="Zip" value={this.state.zipcode} onChange={this.changeHandler} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                    <Input type="date" name="date" placeholder="Date" value={this.state.date} onChange={this.changeHandler} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                    <Input type="time" name="time" placeholder="Time" value={this.state.time} onChange={this.changeHandler} />
                    </FormControl>
                    <FormControl required>
                    <InputLabel>Category</InputLabel>
                    <Select variant="outlined" name="categoryId" value={this.state.categoryId} onChange={this.changeHandler}>
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={1}>Pilates</MenuItem>
                        <MenuItem value={2}>Yoga</MenuItem>
                        <MenuItem value={3}>Lagree</MenuItem>
                        <MenuItem value={4}>Barre</MenuItem>
                        <MenuItem value={5}>Spin</MenuItem>
                        <MenuItem value={6}>Zumba</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="outlined">Create</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        instructorId: state.instructorId,
        instructorFullname: state.instructorFullname,
        instructorUsername: state.instructorUsername,
    }
}

const mapDispatchToProps = {
    createClass,
    instructorClasses
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ClassesCreate)));