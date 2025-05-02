import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    {
      id: 1,
      title: 'Python for Data Science',
      description: 'Master Python libraries for Machine Learning and Data Analysis.',
      image: 'assets/courses/pyht.jpeg'
    },
    {
      id: 2,
      title: 'React for Beginners',
      description: 'Understand the fundamentals of React and build components.',
      image: 'assets/courses/react.jpg'
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript and deploy full websites.',
      image: 'assets/courses/web.png'
    },
    {
      id: 4,
      title: 'Git & GitHub Mastery',
      description: 'Learn version control and collaborate with GitHub effectively.',
      image: 'assets/courses/git.png'
    }
  ];

  viewCourse(course: any) {
    alert(`You selected: ${course.title}`);
  }
}
