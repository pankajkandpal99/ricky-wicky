import React from "react";

const InputGroup = ({ setEpisodeId, name, total }) => {
  return (
    <div class="input-group mb-3">
      <select
        className="form-select"
        id={name}
        onChange={(event) => setEpisodeId(event.target.value)}
      >
        <option vaue="1" selected>
          Choose...
        </option>
        {[...Array(total).keys()].map((num) => (
          <option value={num + 1}>
            {name} - {num + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputGroup;
