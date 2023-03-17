import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import {
  SkeletonCol,
  StyledCard,
  StyledCardImg,
  StyledCardBody,
  StyledCardTitle,
  StyledCardText,
  StyledButtonWrapper,
  StyledPrice,
  StyledButton,
  StyledBestSeller,
  StyledRatingWrapper,
  StyledStar,
} from "./ProductsStyles";

const Products = () => {
  //data es una lista vacía al principio y se llena con la información de los productos de la API después de que el componente se monta.
  const [data, setData] = useState([]);
  // filter también es una lista vacía al principio, pero se actualiza para mostrar los productos seleccionados por el usuario.
  const [filter, setFilter] = useState([]);
  //loading se establece en false al principio y se cambia a true mientras se cargan los datos de la API.
  const [loading, setLoading] = useState(false);
  //agregado al DOM, se ha creado el componentey se ha puesto en su lugar dentro de la página web.
  let componentMounted = true;

  //´useEffect´ permite ejecutar código en momentos específicos del ciclo de vida de un componente >> Obtener los datos de la API cuando el componente se monta por primera vez y actualizar los estados data y filter con los datos obtenidos.
  useEffect(() => {
    //´async´ es para manejar operaciones que pueden tardar un poco en completarse, indica que no debemos esperar una respuesta inmediata.
    const getProducts = async () => {
      //establece loading en true mientras se cargan los datos
      setLoading(true);
      // await hace que la función ESPERE HASTA que se reciba una respuesta de la API antes de continuar con la ejecución.
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        //response.clone().json() actualiza y convierte la respuesta de la API en formato JSON.
        setData(await response.clone().json());
        //actualiza pero hace una copia
        setFilter(await response.json());
        //establece en false después de que se hayan cargado los datos.
        setLoading(false);
      }
      return () => {
        //eliminar del dom, para evitar que se realicen cambios en el componente después de que se haya desmontado => es decir, se hayan cargado los datos.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        {[...Array(4)].map((_, index) => (
          // efecto de carga mientras se cargan los datos.
          <SkeletonCol className="col-md-3" key={index}>
            <Skeleton height={350} />
          </SkeletonCol>
        ))}
      </>
    );
  };

  //actualiza el estado filter para mostrar los productos de una categoría específica seleccionada por el usuario.
  const filterProduct = (cat) => {
    const updatedList = data.filter(({ category }) => category === cat);
    setFilter(updatedList);
  };

  const StyledRating = ({ rating: { rate, count } }) => {
    const roundedRate = Math.round(rate);
    const stars = Array.from({ length: 5 }, (_, index) => (
      <StyledStar
        key={index}
        style={{ color: index < roundedRate ? "gold" : "gray" }}
      >
        &#9733;
      </StyledStar>
    ));
    return (
      <StyledRatingWrapper>
        {stars}
        <span>({count})</span>
      </StyledRatingWrapper>
    );
  };

  const ShowProducts = () => {
    const bestSellers = data.filter((product) => product.rating.rate > 4.4);
    return (
      <>
        <Container className="mb-5 pb-5 d-flex justify-content-center">
          <Row className="d-flex justify-content-center">
            <Col xs={12} md={8} className="d-flex justify-content-center">
              <Row>
                <ButtonGroup aria-label="Filter Products">
                  <Button
                    variant="outline-dark"
                    className="border-0 shadow-sm"
                    onClick={() => setFilter(data)}
                  >
                    All
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="border-0 shadow-sm"
                    onClick={() => setFilter(bestSellers)}
                  >
                    Best Sellers
                  </Button>
                </ButtonGroup>
              </Row>
              <Row>
                <ButtonGroup>
                  {[
                    "men's clothing",
                    "women's clothing",
                    "jewelery",
                    "electronics",
                  ].map((category) => (
                    <Button
                      variant="outline-dark"
                      className="border-0 shadow-sm"
                      key={category}
                      onClick={() => filterProduct(category)}
                    >
                      {category
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </Button>
                  ))}
                </ButtonGroup>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            {filter.map((product) => {
              return (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 mb-4 "
                  key={product.id}
                >
                  <StyledCard>
                    <StyledCardImg variant="top" src={product.image} />
                    <StyledCardBody>
                      <StyledCardTitle>
                        {product.title.substring(0, 12) + ".."}
                      </StyledCardTitle>
                      {product.rating.rate > 4.4 && (
                        <div>
                          <StyledBestSeller>Best Seller</StyledBestSeller>
                          <span
                            style={{
                              color: "black",
                              background: "none",
                              marginLeft: "0.5rem",
                            }}
                          >
                            in{" "}
                            {product.category
                              .split(" ")
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join(" ")}{" "}
                          </span>
                        </div>
                      )}
                      <StyledRating rating={product.rating} />
                      <StyledCardText>
                        {product.description.substring(0, 75) + "..."}
                      </StyledCardText>
                      <StyledButtonWrapper>
                        <StyledPrice>${product.price}</StyledPrice>
                        <NavLink to={`/products/${product.id}`}>
                          <StyledButton variant="primary">
                            More Details
                          </StyledButton>
                        </NavLink>
                      </StyledButtonWrapper>
                    </StyledCardBody>
                  </StyledCard>
                </div>
              );
            })}
          </Row>
        </Container>
      </>
    );
  };

  return (
    <>
      <Container className="my-5 py-5 ">
        <Row>
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Products;
