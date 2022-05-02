import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Lorem ipsum",
        author: "Lorem ipsum",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean ut facilisis justo. Donec laoreet pellentesque scelerisque. 
        Aliquam erat volutpat. Sed lacinia massa at mi imperdiet, vitae 
        fringilla tortor feugiat. Curabitur vel tortor nec enim imperdiet 
        dapibus nec sit amet diam. Phasellus malesuada turpis eleifend nulla 
        condimentum aliquam. Fusce bibendum nulla libero, id feugiat metus
        scelerisque non. Ut suscipit pulvinar diam, sit amet aliquam urna 
        vestibulum nec. Ut in purus eros. Suspendisse consequat, ligula sed l
        acinia mollis, sem dolor placerat augue, ut commodo ex velit et lacus.
         Etiam maximus nunc ac felis efficitur, egestas interdum leo condime
         ntum. Cras vehicula at turpis vitae mollis. Vivamus tincidunt urna e
         t nibh mattis, id auctor nisl dapibus.`
    },
    {
        id: 2,
        title: "Lorem ipsum",
        author: "Lorem ipsum",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean ut facilisis justo. Donec laoreet pellentesque scelerisque. 
        Aliquam erat volutpat. Sed lacinia massa at mi imperdiet, vitae 
        fringilla tortor feugiat. Curabitur vel tortor nec enim imperdiet 
        dapibus nec sit amet diam. Phasellus malesuada turpis eleifend nulla 
        condimentum aliquam. Fusce bibendum nulla libero, id feugiat metus
        scelerisque non. Ut suscipit pulvinar diam, sit amet aliquam urna 
        vestibulum nec. Ut in purus eros. Suspendisse consequat, ligula sed l
        acinia mollis, sem dolor placerat augue, ut commodo ex velit et lacus.
         Etiam maximus nunc ac felis efficitur, egestas interdum leo condime
         ntum. Cras vehicula at turpis vitae mollis. Vivamus tincidunt urna e
         t nibh mattis, id auctor nisl dapibus.`
    },
    {
        id: 3,
        title: "Lorem ipsum",
        author: "Lorem ipsum",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean ut facilisis justo. Donec laoreet pellentesque scelerisque. 
        Aliquam erat volutpat. Sed lacinia massa at mi imperdiet, vitae 
        fringilla tortor feugiat. Curabitur vel tortor nec enim imperdiet 
        dapibus nec sit amet diam. Phasellus malesuada turpis eleifend nulla 
        condimentum aliquam. Fusce bibendum nulla libero, id feugiat metus
        scelerisque non. Ut suscipit pulvinar diam, sit amet aliquam urna 
        vestibulum nec. Ut in purus eros. Suspendisse consequat, ligula sed l
        acinia mollis, sem dolor placerat augue, ut commodo ex velit et lacus.
         Etiam maximus nunc ac felis efficitur, egestas interdum leo condime
         ntum. Cras vehicula at turpis vitae mollis. Vivamus tincidunt urna e
         t nibh mattis, id auctor nisl dapibus.`
    },
    {
        id: 4,
        title: "Lorem ipsum",
        author: "Lorem ipsum",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean ut facilisis justo. Donec laoreet pellentesque scelerisque. 
        Aliquam erat volutpat. Sed lacinia massa at mi imperdiet, vitae 
        fringilla tortor feugiat. Curabitur vel tortor nec enim imperdiet 
        dapibus nec sit amet diam. Phasellus malesuada turpis eleifend nulla 
        condimentum aliquam. Fusce bibendum nulla libero, id feugiat metus
        scelerisque non. Ut suscipit pulvinar diam, sit amet aliquam urna 
        vestibulum nec. Ut in purus eros. Suspendisse consequat, ligula sed l
        acinia mollis, sem dolor placerat augue, ut commodo ex velit et lacus.
         Etiam maximus nunc ac felis efficitur, egestas interdum leo condime
         ntum. Cras vehicula at turpis vitae mollis. Vivamus tincidunt urna e
         t nibh mattis, id auctor nisl dapibus.`
    },
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article    key={article.id} 
                    article={article} />
    ));
    return ( 
        <div className="home">
            {artList}
        </div> 
    );
}
 
export default HomePage;