function initViz() {
    url = "https://public.tableau.com/views/ev_sales_trial/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
    options = {
        hideToolbar: true,
        width: "100%",
        height: "200px",
    };
    viz = new tableau.Viz(tabSheet1, url, options);
  }