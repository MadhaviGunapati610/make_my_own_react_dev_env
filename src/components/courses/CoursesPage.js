import React from 'react';

class CoursesPage extends React.Component{
    state={
        course: {
            title:""
        }
    }
    handleChange = (e) => {
        const course = {...this.state.course, title: e.target.value}
        this.setState({course})
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        alert(`${this.state.course.title}, hi`);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input type="text" value={this.state.course.title} onChange={this.handleChange}/>
            <input type="submit" value="Save" />
            </form>
        )
    }
}

export default CoursesPage;