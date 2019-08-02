import React from 'react';
import { connect } from 'react-redux'
import { editClass } from '../actions/InstructorActions'
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
        maxWidth: 1000,
        margin: '40px auto',
        justifyContent: 'center',
      },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
      },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
    button: {
        margin: theme.spacing(4),
      },
    buttonContainer: {
        width: '100%',
        margin: '10px auto'
    }
})

class ClassEdit extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        const currentClass = this.props.instructorclasses.filter(current => (current.classId === parseInt(this.props.match.params.id)))
        this.state = {
            address: currentClass[0].address,
            city: currentClass[0].city,
            className: currentClass[0].className,
            date: currentClass[0].date,
            description: currentClass[0].description,
            instructorId: this.props.instructorId,
            state: currentClass[0].state,
            time: currentClass[0].time,
            zipcode: currentClass[0].zipcode,
            categoryId: currentClass[0].categoryId
        }
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    cancelHandler = (event) => {
        event.preventDefault()
        this.props.history.goBack()
    }

    submitHandler = (event) => {
        event.preventDefault();
        const { address, city, className, date, description, instructorId, state, time, zipcode, categoryId } = this.state
        this.props.editClass(this.props.match.params.id, { address: address, city: city, name: className, date: date, description: description, instructor_id: instructorId, state: state, time: time, zipcode: zipcode, category_id: categoryId })
    }

    render(){
        console.log("class edit", this.props)
        const { classes } = this.props
        const currentClass = this.props.instructorclasses.filter(current => (current.classId === parseInt(this.props.match.params.id)))
        console.log(currentClass[0].className)
        return (
            <div className="edit-class">
                <h3>Edit Your Class</h3>
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
                    <FormControl className={classes.formControl} required>
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
                    <div className={classes.buttonContainer}>
                    <Button type="button" variant="outlined" onClick={this.cancelHandler} color="secondary" className={classes.button}>Cancel</Button>
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>Update</Button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        instructorclasses: state.instructorReducer.classes
    }
}

const mapDispatchToProps = {
    editClass
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ClassEdit));