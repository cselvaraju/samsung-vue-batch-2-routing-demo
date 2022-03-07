<template>
  <div v-if="selectedBook">
    <h3>Book Details</h3>
    <p>
        ID: {{ selectedBook.id }}
        <br>
        Title: {{ selectedBook.title }}
        <br>
        Author: {{ selectedBook.author }}
    </p>
  </div>
</template>

<script>
export default {
  name: "BookDetailsView",

  data() {
    return {
      bookList: [
        {
          id: 101,
          title: "The Brief History of Time",
          author: "Stephen Hawking",
        },
        { id: 102, title: "Nirmala", author: "Munshi Premchand" },
        {
          id: 103,
          title: "Java2 Complete Reference",
          author: "Herbert Schildt",
        },
      ],
      id: parseInt(this.$route.params.id)
    };
  },
  computed: {
      selectedBook() {
          var book = null;
          for(var i = 0; i < this.bookList.length; ++i) {
              if (this.bookList[i].id === this.id) {
                book = this.bookList[i];
              }
          }
          console.log(book, this.id);
          return book;
      }
  },
  mounted() {
      console.log('id:', this.$route.params.id);
  }
};
</script>
<style>
</style>