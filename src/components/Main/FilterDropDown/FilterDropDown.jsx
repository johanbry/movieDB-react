import { useState, useEffect } from "react";

const FilterDropDown = ({ handleFilterChange }) => {
  const [category, setCategory] = useState("popular");

  // const handleChange = (selectedCategory) => {
  //   setCategory(selectedCategory);
  // };

  useEffect(() => {
    handleFilterChange(category);
  }, [category, handleFilterChange]);

  return (
    <select onChange={(e) => setCategory(e.target.value)}>
      <option value="popular">Popular</option>
      <option value="top_rated">Top Rated</option>
      <option value="upcoming">Upcoming</option>
    </select>
  );
};

export default FilterDropDown;

// printSelectedValue = () => {
//   console.log(this.state.select);
// }

// select = (event) => {
//   this.setState({ select: event.target.value }, this.printSelectedValue)
// };
