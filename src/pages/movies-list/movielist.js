import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../redux/action/moviesAction";
import { Content } from "adminlte-2-react";
import { Table, Spin } from "antd";
import { Card, CardBody } from "reactstrap";
import CardMovies from "./cardmovies";

const MovieList = () => {
  const { loading, error, movies } = useSelector((state) => state.movies);

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const dispatch = useDispatch();
  const push = (value) => {
    window.location.assign(`/movies/${value}`);
  };
  useEffect(() => {
    dispatch(getMovies());
    setData(movies.results);
  }, []);

  const columns = [
    {
      title: "Picture",
      dataIndex: "backdrop_path",

      render: (value,row) => {
        return (
          <a onClick={() => push(row.id)}>
            <img
              alt="picture"
              src={
                `https://image.tmdb.org/t/p/w200/${value}` +
                "?width=56&height=56"
              }
            />
          </a>
        );
      },
    },
    {
      title: "Judul",
      dataIndex: "title",
    },
    {
      title: "Deskripsi",
      dataIndex: "overview",
    },
  ];
  return (
    <Content title="List Genre">
      {loading || data == "undefined" ? (
        <Spin />
      ) : (
        <Card>
          <CardBody>
            <Table
              rowKey={(record) => record.id}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
              }
              dataSource={movies.results}
              columns={columns}
              pagination={pagination}
            />
          </CardBody>
        </Card>
      )}
    </Content>
  );
};
export default MovieList;
