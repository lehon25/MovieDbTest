import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { genreMovies } from "../../redux/action/genreAction";
import { Content } from "adminlte-2-react";
import { Table, Spin } from "antd";
import { Card, CardBody } from "reactstrap";
import "./genre.css";

const Genre = () => {
  const { loading, error, genres } = useSelector((state) => state.genres);

  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(genreMovies());
    setData(genres.genres);
  }, []);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      width: "40%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "10%",
    },
  ];

  return (
    <Content title="List Genre">
      {loading ? (
        <Spin />
      ) : (
        <Card>
          <CardBody>
            <Table
              rowKey={(record) => record.id}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
              }
              dataSource={genres.genres}
              columns={columns}
              pagination={false}
            />
          </CardBody>
        </Card>
      )}
    </Content>
  );
};
export default Genre;
