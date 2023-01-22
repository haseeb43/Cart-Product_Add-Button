// Stateless Functional Component
// we can also do the same thing below occouring by using an arrow function
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a
//           href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
//           className="navbar-brand"
//         >
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a
        href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
        className="navbar-brand"
      >
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* Here below instead of using this.props in arrow function we can only get it 
            just by props.value & we can simplify by destructering props*/}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
