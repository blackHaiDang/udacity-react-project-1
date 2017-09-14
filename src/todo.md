## TODO
- when typing a search in input field, it should update the url, so you can go back to it later with browser back button.
- catch error of backend then send message
- After adding a book from the search page, the search results page becomes empty! And it's even impossible to run the same search again!
- What would be a better way to implement the search bar? I find it tricky to test 'prevState' against current state, as I do now. In another attempts I had the search bar creating an infinite loop (API call > state update > API call) because of 'componentDidMount'. Maybe try further with 'shouldComponentUpdate'?
- The back button is not aligned to the search bar!
- 'Catch' and handle promises errors. esp. if api also return 'undefined', 403 http error without returning anything, or "no books" answer, or shelf update of book failed.
- when typing search, if first typed letter yields a result, and following letters yield no search result, app will show the results of the first letter. It should show no result.
- After a search, not possible to come back to it through browser 'back' button.
- When showing the search result, we should also update the URL.
- Show a message if the search yielded no result. Show "searching" when waiting for search answer.
- The Console fires up a warning when typing search query too fast: Warning: setState(...):
"Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the BookComponent component."
- Cannot limit the number of search results in BooksAPI.search, is this a backend issue?
- In app.js, code is not 'Don't Repeat Yourself', routing sections are mostly repeated between path="/search/" and path="/search/:urlQuery" . Any better way to do this?
- Allow for offline browsing of the books. (persistent storage)
- Add 'Detailed View' for the books.
- Use stateless functions instead of classes for the react component whose only method is render(), see lesson 3.3
- implement testing
- debounce search typing input with lodash https://lodash.com/docs/#throttle ?????????
https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
- race condition of search results "create a suggestion manager — a single source of truth to manage the state of the query suggestions. It was aware of a currently pending AJAX request, and when the user typed something new, the pending AJAX request would be canceled before a new request was issued, so only a single response handler at a time would ever be able to trigger a UI state update."
