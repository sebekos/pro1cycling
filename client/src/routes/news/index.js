import React, { useEffect } from "react";
import { Cover, Sponsors, Bar, List } from "components";
import TeamImg from "img/team.jpg";
import { connect } from "react-redux";
import { loadNews } from "reduxStore";

const News = ({ loadNews, news, loading }) => {
  useEffect(() => {
    loadNews();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Cover text="NEWS/MEDIA" src={TeamImg} />
      <Bar title="NEWS/MEDIA" />
      <List data={news} loading={loading} />
      <Sponsors />
    </div>
  );
};

const mapStateToProps = (state) => ({
  news: state.news.news,
  loading: state.news.loading,
});

const mapDispatchToProps = {
  loadNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
