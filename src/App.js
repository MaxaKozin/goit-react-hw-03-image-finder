import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Spinner from './components/Loader/Loader';

class App extends Component {
  state = {
    url: 'https://pixabay.com/api/?',
    api: '16865907-bf97a2667d97724c7c41d2d46',
    modalContent: '',
    searchQuery: '',
    page: 1,
    data: [],
    openModal: false,
    spinnerEnable: false,
    btnEnable: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getData();
    }

    if (prevState.page !== this.state.page) {
      this.getData();
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({ openModal: !prevState.openModal }))
  }

  toggleSpinner = () => {
    this.setState(prevState => ({ spinnerEnable: !prevState.spinnerEnable }))
  }

  toggleButton = () => {
    this.setState(prevState => ({ btnEnable: !prevState.btnEnable }))
  }

  hadleChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      data: []
    })
  }

  handleNextPage = () => {
    this.toggleSpinner();
    this.toggleButton();
    this.setState(prevState => {
      return {
        page: prevState.page + 1
      }
    });
  }

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  modalContentSet = (id) => {
    const element = this.state.data.find(elem => elem.id === id);
    this.setState({ modalContent: element.largeImageURL })
  }

  getData = () => {
    const { url, searchQuery, page, api } = this.state;
    const getUrl = `${url}q=${searchQuery}&page=${page}&key=${api}&image_type=photo&orientation=horizontal&per_page=12`;
    this.toggleSpinner();
    fetch(getUrl).then(res => res.json()).then(({ hits }) => this.setState(prevState => {
      return { data: [...prevState.data, ...hits] }
    })).then(this.handleScroll).then(this.toggleButton)
  }

  render() {
    const { data, openModal, btnEnable, spinnerEnable, modalContent } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.hadleChangeQuery} />

        <ImageGallery onClick={this.toggleModal}>
          <ImageGalleryItem data={data} onItemClick={this.modalContentSet} />
        </ImageGallery>
        {openModal && <Modal content={modalContent} onBackdrop={this.toggleModal} />}
        {btnEnable ? <Button name="Load more" onPress={this.handleNextPage} /> : <Spinner isEnable={spinnerEnable} />}
      </div>
    );
  }
}

export default App;

