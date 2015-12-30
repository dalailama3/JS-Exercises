function Course(courseName, dept, credits) {
  this.courseName = courseName;
  this.dept = dept;
  this.credits = credits;
  this.enrolledStudents = [];

  Course.prototype.addStudent = function(student) {
    student.enroll(this);
  };
}


function Student(first, last) {
  this.first = first;
  this.last = last;
  this.courses = [];

  Student.prototype.name = function () {
    return this.first + " " + this.last;
  };

  Student.prototype.courses = function () {
    return this.courses;
  };

  Student.prototype.enroll = function(course) {
    var students = course.enrolledStudents;
    if (students.length === 0 || students.indexOf(this.name()) === -1) {
      this.courses.push(course)
      course.enrolledStudents.push(this.name());
    }
    else { return this.name() + " is already enrolled in " + course.courseName; }

  };

  Student.prototype.courseLoad = function () {
    var hashCourseLoad = new Object();
    for (var i = 0; i < this.courses.length; i++) {
      var department = this.courses[i].dept;
      if (hashCourseLoad[department] !== undefined) {
        hashCourseLoad[department] += this.courses[i].credits;
      }
      else {
        hashCourseLoad[department] = this.courses[i].credits;
      }

    }
    return hashCourseLoad;

  }
}

john = new Student("John","Clark");

matt = new Student("Matt", "Clark");

algorithms = new Course("Algorithms", "CompSci", 4);
john.enroll(algorithms);

matt.enroll(algorithms);
webdev = new Course("Web Development", "Compsci", 4);
webdev.addStudent(john);
console.log(john.courseLoad());
