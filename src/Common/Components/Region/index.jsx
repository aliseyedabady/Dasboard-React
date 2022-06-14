import React, { Fragment, useEffect } from "react";
import { useRegion } from "./Hooks";
import Loading from "../Loading/index";

function Index({ form, setForm }) {
  const { loading, regions, getRegions, getAreas, areas } = useRegion();
  useEffect(() => {
    getRegions();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <div className="col-md-3">
        <label htmlFor="">مناطق</label>
        <select
          className="form-control"
          onChange={({ target: { value } }) => {
            setForm({ ...form, region_id: value });
            getAreas(value);
          }}
        >
          <option value="">انتخاب کنید</option>

          {regions &&
            regions.map((element, key) => (
              <option
                key={key}
                // selected={form.city_id == element.id}
                value={element.id}
              >
                {element.title}
              </option>
            ))}
        </select>
      </div>
      <div className="col-md-3">
        <label htmlFor="">نواحی</label>
        <select
          className="form-control"
          onChange={({ target: { value } }) => {
            setForm({ ...form, area_id: value });
          }}
        >
          <option value="">انتخاب کنید</option>

          {areas &&
            areas.map((element, key) => (
              <option
                key={key}
                // selected={form.region_id == element.id}
                value={element.id}
              >
                {element.title}
              </option>
            ))}
        </select>
      </div>
    </Fragment>
  );
}

export default Index;
