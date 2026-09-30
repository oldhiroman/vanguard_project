// =========================================================================
// AIS VANGUARD: DRAFT QUOTATION GENERATOR (AWN OFFICIAL FORMAT)
// Generates exact 2-page A4 PDF based on DraftQuotation.pdf
// =========================================================================

const AWN_LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABJCAIAAACb0KyxAAAdP0lEQVR4nO1dCVgUR9ru7rkvhvu+UW5BDhG5RBRvjRo1Zt01Jr+510TNaszhJnE1usluEp/EaBKTbC5jYjR4X6igiIiCeCNyDiD3NffZ/T8zPfd0Dz3IAOq8Dw/PTFV1TXX329VvffV9VSCCwIADIxIiaV8nv7G5s7K1p6aT3yiW8pu77mKW9HePcmZ7pUbOj/BPHfJmPkwgD3cDHDCBUNJd2XSx5n5ZU2dle28dTKAzopBpXs7BmbFLfN0iHFfTOhx0H34gCNLQfr2yqeRWfUF7Hw+GlQQPZNNdJkQtGB85n8vysHMbHxE46D5skCsl1ffLrtedrmwsFkl7bTqWw3TLin16QtSTNArTbg18BOGg+1BDqVI0dd4urz5+teaEVC6y9XAqmTE1ccWE6CepZIZ9Gvgow0H3oUNL972K2lNlVUf7xB0DOJwEkdOiF06KW8ZhutmhdY8FyHxxuRMzcbib8ShDLO29Vp9fXn20qfMODMMIYnMNIAhF+KfOTV3lwQ2ySxMfG4BCyZ323v3ern9hUB2XcjABI6ralivX607caiiQKkQIAiDqUak6C4ENn/uFm5P/7PGvxQZNHNTWPaYAEQRWqHoqeau4rGQft79SSC7D3aSHHkJJV3nNwavVh7sFzSitEbX1RZ0Fo3RXf9dRH5/0EEhKi144Y9wrVDJ96Fr/yNMdAAAVLKpt2cwXl/u6LfNyXgBBjutrMxAErmm5WF6dV9VchGoWA6e1nzWJxun4pPd3j1yctcHHddRg3GUHTOmuueKqxo6d97t+YNCC/dyWu3OnAwCkK+aANfDFbddqD16rPcQXt2tFC8pgnYBBE3X81j0Jem1j1NmjQ9L0mEUzkl8lkyiO624vuqNo6d7d2L4DRmR0amCQ50oXjkMy4kKpklc1n7nNO1HbUmIgsZ7BRqQ3aBgrpNcIemeW99KcTUGeYwb5PjuASXcAAPpEpXeb3oBhGQCAHMYYX/dnuawUCHT0NAZ09FXfrD94m3dcKucjCIjSWN+Lm5MeJ1HNcNOUpFGzZo9fzaByzO6IA3akOwAAUjnvDm+lTNGCfqVRfP3cn3PnTodAKvAYQyTtrGrOv91wuJNfa9ydo9zFZrZJj26aazSKJZNoc1PXJY2aPcxn+HjSXfOmFlQ1reOLy/QpNIqvO3eGj+sSMokLPE5QKMWNnaW3Gw40dZYrVTJNd25OaDX7EdA66fEEvZfzqMVZmzy4wcN8no8z3TVWMzmv7fPWnt+MEyGI4caZ7OW6kE2PBh5pqGB5W8+NysYD9W1FcqXYIEI0TFVfNSPewyZaRWt2NOa9aY9uSBwTnDsndT2Nwhrms308YI3uGsDtvYfqWrciiMrsQBY93NN5njt3GgliA48QVLC8tedqfVtBfWuhRNaDctekOzciK6K+gObpgMUhxuZ2PekhiDItcVXS6Pkg6LCAjRS6qyEQV9xtWqtU9VlmQRDDhZ3h7jSNy059qJW9XCls6ylr6ixuaCuQyvt0fAWNO2xCpCembThMzwVpm/w94ob7vB8vEKK7Rr923WvewBdfwStAJjk5s9NdOdnO7PSHhfcIAgskvJbu0vtdF9t6ripVUj07tYpFS1C9aDGQ3sBggzRXk97ieUArMxmqerlELsr8mMNwOKmPVLprbqGC1/5FS/ceze3DBYnE5jKTXdiZTqxkGsUbANQd5IiCTNHb0VfR0n2hrbtMKL1vYR80+WwkyjVs1tscTRmsE/QggHGsyZshNnj21MR1ZNLD0SM8vnRH0Su8UNPyL4Wym0hhBi2Ey0pxYiRwmGMpZFdg+MAX1/YKKzv7KroEN/tEtRoK6vpsfKJbGBCJahuD+cVI0IMgOTP25XHhS4fxOjzmsJnuGpnbXq0WNldtOopK9mQxIp0YY+m0YBYtnErxBOwGFSwVSZv6RJW9wkqhpKFHeFeh5Bt6XE0Z3USPlsF6TWJCdFNtY0x6TRkrpDc3VjJoLrmJb4X5ZNrvrB2wC901dx9u6vi6ufM7YICAIJDBoIXRqQE0iheDGkij+JLJXCrZjUxyIl6LQtknV3arYKlQUqdQ8sWyZoGkWiJrk8jaVJqIT7RXNSeu2WdNT48S2ozr1klvKejNLZK6UawrJ2TmuE1uTqEDvVwODCvdUQjEFbUtmyXyhgHXABv9OIIAIEgBQZJmSssf5b12oKcbLqBMkiv5UlkzAiAwrIIRhV48GJPVfFIT1nfJ5iZwzbEoZbWkx9Q2OLZFq6NYzQkGeKZOT95Ip9jwGDswEumukQ3i+tb/dPYdQwAzwzxRGDsDGrvCGriFDnb1hNa1V5erm9PRK2YjUpqQ3kJjYJHeZkFvTHq9Z4GuZjAh7G+pkS85LOuPAt37RB3okg+9wuK61n/rfWzsTXrjwqb+KkZlcElv0DbmWgVT0Fvt481IbyzoqWTO5ISNgR4TBnxNHBhZdD9+5asAj6iYoCw0QKShbVtH3yGL+VcbYMFja928sZEbs5vHYydKTSN7uaWgJ6xtjK3vRt28n9u4rDHvsBleA74UDow4uqtg5fZDK6IC0nPGPkuC1IsaCCW36lq3iKRVA67TLLpnUEiPK+iNSY8v6K1oG0u9DoGUsWHPxYc+4xAwj6B2b+2p2X7oOW+X0KezN7tyfDUMULb17ue1fQEj0gFX+2CC3kTbGPPYUqKg2sbskdB+xhL0aBZ2ebUFJioj9l0XdtiAT9yBEU13AADKq4/+UbSRRmE8mf5uTHAOqCGZQtnZ0PZZJz8f0PgO2oP0mm+musWIptikN9boJmKGmKDHN1aC6k79xciAxSTIMV36SNMdAIC8i1uvVP0JgmBcSO5cI3dWoeQWr/1zvrj8QSo3NlZi9NZWtY0hYghH0KMdtq6sdQs9+vxgCHpv15Sk0Wu4LIfD+uNBdxhRfXvi5aaO6yAIODE9Zqb8I9LfEOTaLShs6tgpltUMmbbpl/S4dhudhd7aKBYdkmqyWXT/2OD/C/aeMeBTc+Dho7vGKNn2zfHnRNIuEAQgEIgLmTEl4XUmzVmXj3QJzjR3fCeW3Rsu0hvsLcSMldanpSCIHh24Isx3AYXkiMx4/OgOAACvo+LnM6/BsBxUr/MGMOnc7DEvjQ2bry+AAHCP4Hxz5y6RFHtZ/uGx0JsJetNRrNkjASMAiUQP9pwTHrCMQXV48D7GdAcA4Eb98UMlH2i8/9R9PAgCfm6xuYlrPZ0NK+0jANwrLG7vzesRnLfuS2wr6Y1GlhZi3dTYopMr5oLe0McbyhtIT4IYwV7zRvktpVPdB3iBHHiU6A4AwLmbXxff/g7UGGg0/0ESBEUHTUuNXMFlqS2Veohl1W09+zr7Tqhg4eB28wY2P7CFHv1Ap3j6uU8P8XnK3kRXqVSXLhTl7fu9oa4OTUlMHrdo6d9Cw2xbTkypVBYVni0rvdTT3e3q5j51xszY+LG2NkYsFh3O+/P6Va2lwc8/YPHSv7q52/xO49XXH87bf7+5icViZ2ZPmpCZRSKpPaMsoVKpLhadr7mnnbfx8vaeOHkKgzGQNez7ensP/bmv8vYtMpk8LjVtyvTpNBp98OkOI6qjpRtv807oGA+i3TyNwkwctSQ+dDGdarKQgQoWdvHz23sPiKR3EYToxhWDbaE32DRN7Y8QhxEe7L3ExzWHBNH0DRZJq+yxbLJKpfrsoy2nTxw3S2cyme9t+WgMYb4qFIot728ouVCkTwFB8JkVLyxe+jfijRGJRO+vX3vrxnXjRI6T06c7vvb18ydeT8mFog/fe1epNNzZ8Wnp7/7rQ0vGC/j8995aV3nrpnGit4/Pm//8ICLKtnUAGupq335jdU93lz5ldETkpo8/GXy6a8KFhPuL1tzvvg6qoevm1fIGoVPZSaOfiQt5ytI+LZHVdglOd/NPi2V1toocQqQnYqHXlaFTfT2ds31cp3JZUUbVKjr6jrV07w7328qgDb7ZMf/40U+2foiZxeZwvv3lN44TIbfKA/v2fvX5NrNEEAQ//+a70FGjCTbmy22fHv5zn2V6RHTMp19+RbASfl/fC8uW8vvM9yZZ/vyLls/el599cjhvv2UlbA7ni13fe3p5E/xRGIbXvPxC1d1Ks/TZ8xfYJQaeRmHPS/vYieUNaRS85g+BQLWgVyiFlyq37ylcXFHzg0TeY3wUgxbq7/58XOieuNBfAjxfdWImEI95VT9LkPq//iv6Wf+kqYms/WAojH7WFtG0k0X393Ofkxy+PSPmt8iA1/VcV6r6Wrp/uVb7VG3LZh/Xp+3BdRiGf/4fbvyAUCD4c+8eglWdOHzIMhFBkLOnThKsQSqVnj1p/pJBca/yTnUVUUtDyYUiS65r0s9bNu/EkUN45/7++nUymYzgj7a2tlhyHb0s9lrygUHjLsrc7sT00lAKUTMe0g5eQRAQS1svV+3ce27h5aovBOIms2OZtFF+bs9EB32VFH48wv9jb5dFTFoYSGDVPpTHxl+1jNeOIhBM0lPIHA9u5mi/11Kj9qTF7IsJeteVkwzpXj4yRUtTx9dXq+c3tG2Typu8XRd5Oj8B2AFnTh5vb221UuDIgTyCt1yhUGCmF5zO145X+sO18jKRCHsjHRiGC06fIlIJAABn808SbyFeswEAqK+r3f7pfwg2vrO9He9H7bhZjTPLb2rShsOX3lDBUl0Xq2O8pjdVqkQ363++w9sd4JER7veEr3sa6oCgBwliu3AmosuyqmCxUHJLJK2UyhvEslqd0Mc4fwgyyBWU8epJfs1nRE19kAQ5MenBbHokmxHBZkSx6CFY8eNIn6i0vTevW1CoH1E4MRODPFfb41ohCHLs0EHrZQR8fv7xo7OeMBh28eDt69vc1GiZ3tXZcfvmjZgx/a/2cebUCSu5xefPrXj57/1W0tPdZSb9DS30MTFaEEH+8WPRsWOmz54LjNi9mfzdk+amfnakdLUKlhiJeFDf5WvoCDd3nmvuPMeme47ymxvkOY3DDLCsigQxuaxxXNY4fYpC2SVXdklkNTAikynalKbR4voJUU2YrDuV4kEhudCoPnRqAAmytomXTNHS2Xe8vfeATHHfOJ1JGx0R8F802GrQUVFedsd0iIaJvL2/E6F7Tu60stJLmFnF5wv7pbtMJr1SctFKgfbW1saG+oCgfhRd6cViJU6HnTN1GmA7du3YHhEVHWKjkWpItyLzdRs7e/xnx66sVirFOisNouU9ZNzfAxJ5+836Xbfqd3HZIYGeU/zdJzkxrQV3UshuFLIbix4+KO2Uynld/NPdgtOY3stUsld4wEckyF4TqMcO5hEp1tzUeO7s6axJk60XS0lLY3M4QoHAMqvwdP5zL76CZwdEUX65VCKRWCkAw3Bx0fmn+qP76ZPYrwgGk5mYnALYDrFItGnD25/u+MaJO8BVSodiuTYf1/hZ4z5zYvlpuY6KZkj923qu69UOCAFCSe2dhm/yy5eeKlt8tfrD1u7zciXGAmYPDqWK3yu8WNe69Wr13IqaRY0dOzC5TqN4xwTtpFP87NEGAADa2lovnCskWPjYwQP9lmGx2OPT0jGzuru6+n2NnMGhqU1lBHz+3du3MLNycqfR6APcHqbl/v1Ptm4mKOKHbaNJL5e4OeN3HL+yki9u0A9YTViuS1QbcDTKHgQRkZQnlvEaOw6SIAqT7uXGGctlR7LpQUx6AINK1CxlDLmiXapolMgaRNJKgfiqVHEfQXCHRyhoFN/ooC9pFJu1JnHs/eUn4vfv2tXyWzeu9ytIMrNzLO33KIoKzsbGxQM4kEolZZdLgf7QxGvg1dcFBofgFbhyqQRv6Jk5aRLwACi9WLx39882zSEMw76qLLrnzJQdxbc2N3ddMNhGNENEwwOg7vtRZW9srQcQQC6WNkpkjc1dhzQpEIXE4jBHkyCqEzMcAEA61ZtKdtEbItUAAZWyT6poRqdvYVguklYigNim2EI6xS8qaLtduS4UCApPn7ZMhyAoJDSsphrDo+7YoQP90j05ZTzHyUnA51tmVZSXwTAMGduwjHC55KLUqpJBgSDI+YKCpctx6X7hPPb7yt3DMzbO5vldM/z47TeR0bFxCQkjehthBtU1O35LRc3OysbdFl27hugarqufASMzDmAY1GrZDwKwEhb0CstAEOgRlKBZ6O3TGR/Vh+i/GlviiYNODYgK3K5Z98+OOLj/D5EIw4ciLTNrzvwn31y10jKr8HT+X5551vrUJkQiTZs1549ff7HM4tXXNdTV4g34CvPzCba88Ez+0uXPYmaJhEK8sfL02XPwnjTigGH4v1s3ffTZF14+PjYdONRLLZMgatLo1zJi/kUm0fViXcd1rZpHjeX4XEcfBvUYAJU9llzXlx8w152YidGBX9qb63K5PP/4Uct0EARnz1swZmxCQCDGZrcqleoogaFtWkYm3mkXnMHmtEQsvlp2GSAGVM9gZpUUF8mkGKGbIAhOyFQH8j84OtraPv5wo5zw3BOK4VlZPMgrd2ryt26cSPWA1YjrevWikzdarhsSdVzXfEYlvmbgazSRhBbT32jj2VaC8HCeExm4jUqx+zoCZ0+dbG3BWK0kKCQ0LkHtkzNv8VOYBx49kCcS9uNXFxkT6+uHPby+eP485mjhUvEFTJsMXn9ccBr7sSk+dw4zPSRsVEjooAXy3r5x46fvdtl0yLAtpO/MCpucuCvCfwkEkvXewoY/CEFtOCaCR8N1jT+C1nqvz9X392YaxtbXJghSQrzXhflsgECtQ5j9gCAIXic9c6524jYrO4fNwdiZTCqVHj3Uv4kGb1KmideA6Qhw7uwZzPJTZ87ETL9QWACbxVYCgEAguFJagtOeOYDtYLFw98vYv/c34kat4aS7ZoRKjg9dlR3/FZcZbGqLVBvmzR8AbWevs9sYlTfSNmoYlI+NJ8ekhcUGf+/lshAYEpRfLr2H5drB5nByp2vpxWKzs3KmYB5+6tgRvEkcPdLwXW3PF5w1SxGLRBXlGOv3O3G5z730Kp2BMTfXyGvgNdSbJVaUXVHI5ZaFKRTKhIyBrAj7yqo1XGd9WJwJEBj+ZMumNqw3JCaGf5sUV07spPjvIwKWU8gMNcV1XAf0GkYvVEzFulaRG3Hd4Blmo1gHQYq365IxIT8N1qQVEfy512TTKz1mzZ1nbJaet3ARppZo4vHOF5pT1gy+fv6R0TGYWcUWnWJx0TlMm8y41DQ2m5OUMp6gAb4YxyYTHhU9AF95jTHH452Nm8lkbLOKRCLZ/N67RKxJI4Lumh0QGFGBL2WN+Z+v+2TUmUwzfrU2MLUi1m3lOocRGxv8XbDXGhAcOjtVfW3N1SsYg0IyhZI7Y5Zxin9A4LjUCQOecpo8bTpm+v3mprpak2D5C4UFVmqYPBW7npKi8zBssO3KZTI8B4RZOoU2AMTGxT/7wkt4udVVd7f9599E5i5GBN1RsBlBiaM2T4j+xoM7XitmDANT0GxgakWsE+c6nRoU6rMhJvhbFt0QWzg0yNv7O+btGZuY5OtvbmGcOXceZiU3r1+7UdHPKvvpWdk0GvY45IoRL4UCQUW5YVNRPZxdXKNj1Vt4JyQlM5kYPhRNjbz62lr916tllzFdKZlMZuqAlIwec59chDdVjBpnTx49/DDRHYULOy45fNv4qF0e3HQIougGpkYKHkes2zQwZdBCRvm+Hx+6x9N5ztBvpyPg809h2R8BAJi/CMMUMzYpCc/KfuCPvdZ/i+PklIzzcjhj5P5efrkU03Q4Pi2NSlX7QtPo9PSsiTj1GPTMmZPYHr+J41LodGueef2CRCKtXv+2pzeuaXjn59v6dcQfcXTXAHRmjUkY9UlazO+hPi8waH6DNTAFQTKXNT4y4NO4kN3u3Jl2cm/sF3t//QWza/f1D4hPTLJMp1Cos+dhO0KWFBc1N2L4+hJxP2xsqG/i8dDPpSXF/dp2pszAts+UXLiA6hm1ksGxyczAeUHZBCcn7satH1Mo2JEPMql0y/v/xJyzG+F014JB9Q3xXjE+6rfE0Tv93Bey6WEab0qDWCc4MCVBTCdmYqjPWwmjDkQFfu7MTh8uoqPutaeOHcHMyp48pburq7Ojw/IvcVwKZoQyDMN5+363/ouJySmY1kwYhlH7jFQiMQ5s1SMgMCg8IlL/NWZMnIcnxlzE/abG6iq1a93lSxclYrFlAWcX17ixNk/4YyIwOOTva9bi3e+W+81bP3hPpVKNCCeCgQECKVxWApeVAACIVN4slFQKJZUSWY1Idk+lEsKI2PLcySQuCWKx6JHqP0YEhxFPggYSzW4PnDl5oq8XI54NAIDdP3y/+4fvba3w5JHDy59/icXCdU6m0WjZk3Mxw0ALz+Q/veyZivIyMZbgTs3IBI1emhAEpWZkHNqPEcBaeDo/PDIK0/lH46+Wbd3l2Cbkzph5++YNvEi/stJLllMBDxPdjQDSqf50qr87V2uKVsEilQrj5UUhuw2lmYU4VCrVwf1/DG6dCoXi4L69Ty9bbqVMztRpmHTn1dc1NfIKcYLxsiebm/yzJ+di0r2i/IpSqbx5rQKznhlzBkHJGOOFv6+sq6muqryDmYtp8noIxEy/IEEsKsXL8m9kcl09Iiy9pF9AZhBx5ECe8coWlhgdEYmpQ1BHhlIs02FgcEhQiHl4TXhklDeWV1ZDXd3hvH29vSax9ih8/f2DQwd5DzYGg7n+n++7uNq8denDTfeHCwiC7P+d6GoCNqG7q9O6GY6kdpCcjZl1JG8/puCekJ5pOb1FIpEmYs3ywjC858cfMOvPyR1InF6/8Pb1W/nGOu1EDGE46D50qK+tuaZbkWvQcfzwISuaFQCASTi042P5xGv0z9QHrwf1Qwbsg9T0jCeX/MWmQxx0Hzr8+uP/7Fd5ddXdy1bjqb19fMJGE3WRGBM/Fi/yOjA4eHQE0Vm5qOgYN3c7LjO4/PkXbVoM0EH3IUJnRzumRB5EHLXqUwCCIHFdkYYzo6TLzSZYz8BWHCAOCILe27yV+BM1Qod0jx72/bYHMxaBTme8t2UrhWzDFjf7fvv1YhGGQ/mVSxebeA3+WBEhKHKmTvt253brmgdFRra1cNKMiZN++Kb/dfOoNFrWpBzAzmCx2W9/sOmtNa8TCfVw0H0oIBaLCvKxjX0TJ0+OT8CYSbUCGo1acgEjPgNBkN93/7xm/Tt4B3KdnROTU/AmPvWIS0h0c7PWX/r5+UVERd+9c9t6PSmpE1hsjOmtQUdUTOyy51bs2rG935IOMTMUOHbwQB+WkQ4ikWY9scDW2sLCI/AmKYsKCjB/yCZ1kWZVyahBLAbPTjYZTMxb9FQagSY56D4UwIs8ioqJGRU+EA97PBcUqVRiXcGnpmcwmdYmmKlUaubE/hfGmDZzNolkTRo4u7gk4rjI2wMQBK1e/47lRIF5saFqz+MLXn1dS7N6/Q9LzF+0ZGB1pmdNxPMNvIEztYmCzmCk4LvRosEcRKZvuM7OY5OsabDU9EzUlfLBQdABgcVivf3+Rut+lw662x0UChVzNsQvIDBlQtrA6iSRSE8swA4ytN55A+rAU5PwETNk5fSzIh/BksTr6TcAPJSw/TQgKHjlG//A26+cyWQ66G53+Pj5YVpLps+ajReQRgSTcqe5uLpZpmf2ZwwZEz8Wb/UvF1dXvCA9S6SmZ7DY2EHToyMibXWBBEEQM2grNi4eLzwFE5Nyp816AjtsKmvyFAfdhwJr39lgtvFGXELC/MUDVDIonF1cVr/5FtWUChNzJmf0ZxQnkcivr32TQjFXGmQyedW6t/p9OejB4TitWrcegsyVBo1Ge+0f6wawdtLKN9aa9Qvevr5r3/2nrZ4CL7++ZubcJ8yOSpkw4eWVq+yyWY0DluDV1504euTmtQoXF9f0iRPNAlIHjIa62hNHDt+6cd3D0ys1PWNS7lSCSrfmXtV3X+3QOw/GJyQ+vWw5uriNTSi7fGnPTz/eun4N/Zqckvp/r7wahL92pHUIBYLDefuvV1xFYDg2fuzcBQsJ7s9jids3b1w8fw5dNicmLi5j4iQKhfL/3PoNHH94nrQAAAAASUVORK5CYII=";

// Accurate Thai Baht number-to-words algorithm
function bahtText(num) {
  num = Number(num);
  if (isNaN(num)) return "";
  if (num === 0) return "ศูนย์บาทถ้วน";
  const numStr = Math.abs(num).toFixed(2);
  const parts = numStr.split(".");
  const intPart = parts[0];
  const decPart = parts[1];
  const digits = ["", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];
  const positions = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];

  function readGroup(str) {
    let res = "";
    const len = str.length;
    for (let i = 0; i < len; i++) {
      const d = parseInt(str[i]);
      const pos = len - i - 1;
      if (d !== 0) {
        if (pos === 1 && d === 1) res += "สิบ";
        else if (pos === 1 && d === 2) res += "ยี่สิบ";
        else if (pos === 0 && d === 1 && len > 1 && str[len - 2] !== "0") res += "เอ็ด";
        else res += digits[d] + positions[pos];
      }
    }
    return res;
  }

  let result = "";
  if (intPart.length > 6) {
    const millionPart = intPart.slice(0, intPart.length - 6);
    const restPart = intPart.slice(intPart.length - 6);
    result = readGroup(millionPart) + "ล้าน" + readGroup(restPart) + "บาท";
  } else {
    result = readGroup(intPart) + "บาท";
  }

  if (decPart === "00") {
    result += "ถ้วน";
  } else {
    result += readGroup(decPart) + "สตางค์";
  }
  return (num < 0 ? "ลบ" : "") + result;
}

let currentDraftQuoteData = null;

// OPEN CREATE DRAFT QUOTATION MODAL
function openCreateDraftQuotationModal() {
  // 1. Gather current EDS calculation data
  const speed = document.getElementById("edsSpeedSelect")?.value || "500/500";
  const contract = document.getElementById("edsContractSelect")?.value || "2";
  const loc = (typeof edsCurrentLocation !== "undefined" && edsCurrentLocation) ? edsCurrentLocation : { status: "estate", lat: 16.4811162, lng: 102.8170736, distanceKm: 0, estate: { name: "นิคมอมตะนคร" } };
  
  const r = calcEdsPrice(speed, contract, loc.status);
  const now = new Date();
  const monthsEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const formattedDate = now.getDate() + " " + monthsEng[now.getMonth()] + " " + now.getFullYear();
  
  // Random reference number in AWN format
  const randNum = String(Math.floor(1000 + Math.random() * 9000));
  const quoteNo = "AWN-" + now.getFullYear() + "-00" + randNum + "-BD86-V1";

  // Default company and location info
  let companyName = "บริษัท พรีเมียร์ ดิจิทัล โซลูชันส์ จำกัด (มหาชน)";
  let contactName = "คุณ สมเกียรติ มุ่งมั่น";
  let address = "เลขที่ 888 นิคมอุตสาหกรรม" + (loc.estate ? loc.estate.name : "อมตะนคร") + " หมู่ 1 ต.คลองตำหรุ อ.เมืองชลบุรี จ.ชลบุรี (พิกัด: " + loc.lat + ", " + loc.lng + ")";

  if (loc.estate && loc.estate.name) {
    companyName = "บริษัท สยามแมนูแฟคเจอริ่ง (" + loc.estate.name + ") จำกัด";
    address = "เลขที่ 129/4 นิคมอุตสาหกรรม" + loc.estate.name + " ถนนสายหลัก อ.เมือง จ.ชลบุรี (พิกัด: " + loc.lat + ", " + loc.lng + ")";
  } else if (loc.node && loc.node.name) {
    companyName = "บริษัท อินโนเวชั่น ฮับ (" + loc.node.name + ") จำกัด";
    address = "อาคารบิสซิเนสทาวเวอร์ ใกล้" + loc.node.name + " (พิกัด: " + loc.lat + ", " + loc.lng + ")";
  }

  const contractMonths = r.term.months || (parseInt(contract) * 12);
  const monthlyTotal = r.total;
  const monthlyVat = Math.round(monthlyTotal * 0.07 * 100) / 100;
  const netMonthly = Math.round((monthlyTotal + monthlyVat) * 100) / 100;

  const contractTotal = monthlyTotal * contractMonths;
  const contractVat = Math.round(contractTotal * 0.07 * 100) / 100;
  const netContract = Math.round((contractTotal + contractVat) * 100) / 100;

  currentDraftQuoteData = {
    quoteNo: quoteNo,
    date: formattedDate,
    customerName: companyName,
    contactName: contactName,
    address: address,
    tel: "02-799-8888",
    email: "procurement@company.co.th",
    salesName: "คุณ สมชาย อันดามัน (Somchai A.)",
    salesRole: "Corporate Sale Manager - SME / BC",
    salesTel: "081-999-8888",
    salesEmail: "somchaia@ais.co.th",
    speed: speed,
    speedLabel: r.plan.label,
    contractMonths: contractMonths,
    contractLabel: r.term.label,
    monthlyTotal: monthlyTotal,
    monthlyVat: monthlyVat,
    netMonthly: netMonthly,
    contractTotal: contractTotal,
    contractVat: contractVat,
    netContract: netContract,
    areaFee: r.areaFee,
    discount: r.discount
  };

  // Populate form fields
  if (document.getElementById("draftQuoteCompany")) document.getElementById("draftQuoteCompany").value = currentDraftQuoteData.customerName;
  if (document.getElementById("draftQuoteContact")) document.getElementById("draftQuoteContact").value = currentDraftQuoteData.contactName;
  if (document.getElementById("draftQuoteAddress")) document.getElementById("draftQuoteAddress").value = currentDraftQuoteData.address;
  if (document.getElementById("draftQuoteTel")) document.getElementById("draftQuoteTel").value = currentDraftQuoteData.tel;
  if (document.getElementById("draftQuoteEmail")) document.getElementById("draftQuoteEmail").value = currentDraftQuoteData.email;
  if (document.getElementById("draftQuoteNo")) document.getElementById("draftQuoteNo").value = currentDraftQuoteData.quoteNo;
  if (document.getElementById("draftQuoteDate")) document.getElementById("draftQuoteDate").value = currentDraftQuoteData.date;

  // Render live preview
  updateDraftQuotationPreview();

  // Open modal and bring directly to front
  const modal = document.getElementById("draftQuotationModal");
  if (modal) {
    modal.style.zIndex = "100";
  }
  openModal("draftQuotationModal");
  if (typeof lucide !== "undefined") lucide.createIcons();
}

// UPDATE PREVIEW WITH FORM DATA
function updateDraftQuotationPreview() {
  if (!currentDraftQuoteData) return;

  currentDraftQuoteData.customerName = document.getElementById("draftQuoteCompany")?.value || currentDraftQuoteData.customerName;
  currentDraftQuoteData.contactName = document.getElementById("draftQuoteContact")?.value || currentDraftQuoteData.contactName;
  currentDraftQuoteData.address = document.getElementById("draftQuoteAddress")?.value || currentDraftQuoteData.address;
  currentDraftQuoteData.tel = document.getElementById("draftQuoteTel")?.value || currentDraftQuoteData.tel;
  currentDraftQuoteData.email = document.getElementById("draftQuoteEmail")?.value || currentDraftQuoteData.email;
  currentDraftQuoteData.quoteNo = document.getElementById("draftQuoteNo")?.value || currentDraftQuoteData.quoteNo;
  currentDraftQuoteData.date = document.getElementById("draftQuoteDate")?.value || currentDraftQuoteData.date;

  const container = document.getElementById("draftQuotePreviewContainer");
  if (container) {
    container.innerHTML = generateQuotationDocumentHTML(currentDraftQuoteData);
  }
}

// GENERATE DOCUMENT HTML (EXACT MATCH OF DraftQuotation.pdf)
function generateQuotationDocumentHTML(d) {
  const monthlyBahtText = bahtText(d.netMonthly);
  const contractBahtText = bahtText(d.netContract);

  return `
    <div id="quotationPrintRoot" class="space-y-6" style="font-family: 'Prompt', 'Inter', sans-serif;">
      <style>
        .quotation-page {
          background-color: #ffffff !important;
          color: #1e293b !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3) !important;
        }
        .quotation-page * {
          color: #1e293b;
        }
        .quotation-page .text-white {
          color: #ffffff !important;
        }
        .quotation-page .text-emerald-700 {
          color: #047857 !important;
        }
        .quotation-page .text-emerald-800 {
          color: #065f46 !important;
        }
        .quotation-page .text-emerald-900 {
          color: #064e3b !important;
        }
        .quotation-page .text-slate-500 {
          color: #64748b !important;
        }
        .quotation-page .text-slate-600 {
          color: #475569 !important;
        }
        .quotation-page .text-slate-700 {
          color: #334155 !important;
        }
        .quotation-page .text-slate-800 {
          color: #1e293b !important;
        }
        .quotation-page .text-slate-900 {
          color: #0f172a !important;
        }
        .quotation-page table, .quotation-page th, .quotation-page td {
          border-color: #64748b !important;
        }
        .quotation-page .bg-slate-100 {
          background-color: #f1f5f9 !important;
        }
        .quotation-page .bg-slate-50 {
          background-color: #f8fafc !important;
        }
        .quotation-page .bg-lime-100 {
          background-color: #ecfccb !important;
        }
      </style>
      
      <!-- ================= PAGE 1 ================= -->
      <div class="quotation-page bg-white p-6 sm:p-10 rounded-xl shadow-lg border border-slate-200 text-[11px] leading-tight relative" style="width: 100%; max-width: 800px; margin: 0 auto; box-sizing: border-box;">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-300">
          <div class="flex items-center gap-3">
            <img src="${AWN_LOGO_BASE64}" alt="AWN" style="height: 38px; width: auto;" class="shrink-0">
            <div>
              <div class="font-bold text-[12px] text-slate-900">บริษัท แอดวานซ์ ไวร์เลส เน็ทเวอร์ค จำกัด : Advanced Wireless Network Company Limited</div>
              <div class="text-[10px] text-slate-600">414 ถนนพหลโยธิน แขวงสามเสนใน เขตพญาไท กรุงเทพมหานคร 10400</div>
            </div>
          </div>
        </div>

        <!-- Green Title Banner -->
        <div class="my-2.5 py-1.5 px-3 rounded-xs text-center font-bold text-sm tracking-wide text-white" style="background: linear-gradient(90deg, #60ba30 0%, #4da023 100%);">
          ใบเสนอราคา / QUOTATION
        </div>

        <!-- Info Grid (2 Columns) -->
        <div class="grid grid-cols-12 border border-slate-400 mb-2.5 text-[11px]">
          <!-- Left: Customer Details -->
          <div class="col-span-8 p-2 border-r border-slate-400 space-y-1">
            <div class="flex"><span class="w-20 font-bold shrink-0">เรียน/To :</span><span class="font-semibold text-slate-900">${d.customerName}</span></div>
            <div class="flex"><span class="w-20 font-bold shrink-0">ชื่อผู้ติดต่อ/Contact :</span><span>${d.contactName}</span></div>
            <div class="flex"><span class="w-20 font-bold shrink-0">ที่อยู่/Address :</span><span class="text-[10px] leading-snug">${d.address}</span></div>
            <div class="flex gap-4 text-[10px] pt-0.5">
              <span><strong>โทร/Tel :</strong> ${d.tel}</span>
              <span><strong>อีเมล/e-mail :</strong> ${d.email}</span>
            </div>
          </div>
          <!-- Right: Quote Details -->
          <div class="col-span-4 p-2 space-y-1 bg-slate-50/50 text-[10px]">
            <div><strong>เลขที่/No :</strong> <span class="font-mono font-bold text-slate-900">${d.quoteNo}</span></div>
            <div><strong>วันที่/Date :</strong> ${d.date}</div>
            <div><strong>ชื่อ/Name :</strong> ${d.salesName}</div>
            <div><strong>โทร/Tel :</strong> ${d.salesTel}</div>
            <div><strong>อีเมล/e-mail :</strong> ${d.salesEmail}</div>
          </div>
        </div>

        <div class="text-[10px] text-slate-700 mb-2">
          ขอเสนอรายการส่งเสริมการขายของ/We are please to submit promotion package for <strong>บริการ Corporate Internet</strong> ตามเงื่อนไขดังนี้/ here in at conditions stated :
        </div>

        <!-- Main Pricing Table -->
        <table class="w-full border-collapse border border-slate-400 text-[10.5px] mb-2">
          <thead>
            <tr class="bg-slate-100 text-slate-900 border-b border-slate-400">
              <th class="border border-slate-400 p-1.5 text-center font-bold">รายการส่งเสริมการขาย/Promotion Package</th>
              <th class="border border-slate-400 p-1.5 text-center font-bold w-24">ราคา/Price<br>(บาท/Baht)</th>
              <th class="border border-slate-400 p-1.5 text-center font-bold w-16">จำนวน/Qty.<br>(หน่วย/Unit)</th>
              <th class="border border-slate-400 p-1.5 text-center font-bold w-24">รวม/Total<br>(บาท/Baht)</th>
            </tr>
          </thead>
          <tbody>
            <!-- 1. One Time Charge -->
            <tr class="bg-slate-50/40">
              <td colspan="4" class="border border-slate-400 px-2 py-0.5 font-bold text-slate-800">
                ค่าบริการแรกเข้า/One Time Charge
              </td>
            </tr>
            <tr>
              <td class="border border-slate-400 p-2 align-top">
                <div class="font-bold">1. ค่าติดตั้งอุปกรณ์/Installation Charge <span class="text-emerald-700">** New implementation **</span></div>
                <div class="pl-3 text-[10px] text-slate-600 mt-0.5">
                  (1) สถานที่/Location : ${d.customerName}<br>
                  ${d.address}<br>
                  <span class="font-semibold text-slate-700">***Including Internal Wiring 0-150 Meters (AWN Standard)***</span>
                </div>
              </td>
              <td class="border border-slate-400 p-2 text-right font-mono align-top">12,500.00</td>
              <td class="border border-slate-400 p-2 text-center align-top">1</td>
              <td class="border border-slate-400 p-2 text-right font-bold text-emerald-700 align-top">Waive</td>
            </tr>
            <tr class="text-[10px] bg-slate-50/50">
              <td colspan="3" class="border border-slate-400 p-1 text-right font-semibold">รวมค่าบริการแรกเข้า/Total Onetime Charge</td>
              <td class="border border-slate-400 p-1 text-right font-mono font-bold">0.00</td>
            </tr>
            <tr class="text-[10px]">
              <td colspan="3" class="border border-slate-400 p-1 text-right">อัตราภาษีมูลค่าเพิ่ม/Vat Rate 7%</td>
              <td class="border border-slate-400 p-1 text-right font-mono">0.00</td>
            </tr>
            <tr class="text-[10px] font-bold bg-slate-100/60">
              <td class="border border-slate-400 p-1 text-slate-700">ศูนย์บาทถ้วน</td>
              <td colspan="2" class="border border-slate-400 p-1 text-right">รวมค่าบริการแรกเข้าทั้งสิ้น/Net Onetime Charge</td>
              <td class="border border-slate-400 p-1 text-right font-mono">0.00</td>
            </tr>

            <!-- 2. Monthly Charge -->
            <tr class="bg-slate-50/40">
              <td colspan="4" class="border border-slate-400 px-2 py-0.5 font-bold text-slate-800">
                ค่าบริการรายเดือน/Monthly Charge
              </td>
            </tr>
            <tr>
              <td class="border border-slate-400 p-2 align-top">
                <div class="font-bold text-slate-900">Terminal</div>
                <div class="text-[10.5px] font-bold text-emerald-800">
                  Corporate Internet Speed Bandwidth Domestic ${d.speed} Mbps. / International ${d.speed} Mbps. (Last Mile Fiber Optic)
                </div>
                <div class="text-[10px] text-slate-600 mt-1 leading-snug space-y-0.5 pl-2">
                  <div>• Including Rental Router : 1 Unit (Industrial Grade)</div>
                  <div>• Public IP 8 IP (Fixed Public IP สำหรับเซิร์ฟเวอร์และ VPN องค์กร)</div>
                  <div>• 24 Hrs. x 7 Day Call Center and Network Operation Center (NOC) Support at 1149 / 1740</div>
                  <div>• 24 Hrs x 7 x 365 day Engineer onsite for setup, service and maintenance</div>
                  <div>• Recovery Time 4-6 Hours (การันตี SLA 99.95% ซ่อมด่วนตามมาตรฐานองค์กร)</div>
                  <div>• 40 service centers nationwide</div>
                  <div>• Monitoring and SMS Alert (24 x 7 x 365) & MRTG web traffic report</div>
                  <div>• Fully protection with DWDM Technology for the Best Reliability</div>
                  <div>• Unlimited Usage and Up/Down Stream Full Bandwidth (Dedicated 1:1)</div>
                  <div>• Internet Gateway connect to Tier 1 network operator</div>
                </div>
                <div class="mt-2 text-[10px] font-semibold text-slate-800">
                  เงื่อนไขเพิ่มเติม/Additional Conditions :<br>
                  <span class="font-normal text-slate-700">1. ระยะเวลาใช้บริการ/Service Duration *${d.contractMonths} เดือน/Month (${d.contractLabel})</span>
                </div>
              </td>
              <td class="border border-slate-400 p-2 text-right font-mono align-top">${d.monthlyTotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</td>
              <td class="border border-slate-400 p-2 text-center align-top">1</td>
              <td class="border border-slate-400 p-2 text-right font-mono font-bold align-top">${d.monthlyTotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</td>
            </tr>

            <!-- Monthly Totals -->
            <tr class="text-[10px] bg-slate-50/50">
              <td colspan="3" class="border border-slate-400 p-1 text-right font-semibold">รวมค่าบริการรายเดือน/Total Monthly Charge</td>
              <td class="border border-slate-400 p-1 text-right font-mono font-bold">${d.monthlyTotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</td>
            </tr>
            <tr class="text-[10px]">
              <td colspan="3" class="border border-slate-400 p-1 text-right">อัตราภาษีมูลค่าเพิ่ม/Vat Rate 7%</td>
              <td class="border border-slate-400 p-1 text-right font-mono">${d.monthlyVat.toLocaleString('en-US', {minimumFractionDigits: 2})}</td>
            </tr>
            <tr class="text-[10px] font-bold bg-slate-100/70">
              <td class="border border-slate-400 p-1 text-slate-800">${monthlyBahtText}</td>
              <td colspan="2" class="border border-slate-400 p-1 text-right">รวมค่าบริการรายเดือนทั้งสิ้น/Net Monthly Charge</td>
              <td class="border border-slate-400 p-1 text-right font-mono text-emerald-800 font-black">${d.netMonthly.toLocaleString('en-US', {minimumFractionDigits: 2})}</td>
            </tr>

            <!-- Contract Totals -->
            <tr class="text-[10px] bg-slate-50/50">
              <td colspan="3" class="border border-slate-400 p-1 text-right font-semibold">รวมค่าบริการตามสัญญา/Total Contract Charge (${d.contractMonths} เดือน)</td>
              <td class="border border-slate-400 p-1 text-right font-mono font-bold">${d.contractTotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</td>
            </tr>
            <tr class="text-[10px]">
              <td colspan="3" class="border border-slate-400 p-1 text-right">อัตราภาษีมูลค่าเพิ่ม/Vat Rate 7%</td>
              <td class="border border-slate-400 p-1 text-right font-mono">${d.contractVat.toLocaleString('en-US', {minimumFractionDigits: 2})}</td>
            </tr>
            <tr class="text-[10px] font-bold bg-lime-100/60">
              <td class="border border-slate-400 p-1 text-slate-900">${contractBahtText}</td>
              <td colspan="2" class="border border-slate-400 p-1 text-right text-slate-900">รวมค่าบริการตามสัญญาทั้งสิ้น/Net Contract Charge</td>
              <td class="border border-slate-400 p-1 text-right font-mono text-emerald-900 font-black">${d.netContract.toLocaleString('en-US', {minimumFractionDigits: 2})}</td>
            </tr>
          </tbody>
        </table>

        <!-- Page 1 Bottom: Conditions 1 & 2 -->
        <div class="border-t border-slate-300 pt-2 text-[9.5px] text-slate-600 leading-snug space-y-1">
          <div class="font-bold text-slate-800 text-[10px]">เงื่อนไขรายการส่งเสริมการขาย/Conditions of Promotion Package</div>
          <div>
            <strong>1. บริการ Corporate Internet</strong> หมายถึง บริการอินเตอร์เน็ทความเร็วสูงผ่านวงจรสื่อสารข้อมูล (Leased Circuit) สำหรับองค์กร ด้วยความเร็วในการรับส่งข้อมูลตามที่ระบุไว้ในคำขอใช้บริการ/เอกสารแนบ<br>
            <span class="text-slate-500 italic">1. Corporate Internet Service means high speed internet service via Leased Circuit for corporate Subscriber with data transferring speed as specified in Application Form/Attachment.</span>
          </div>
          <div>
            <strong>2. เมื่อสิ้นสุดระยะเวลาใช้บริการข้างต้น</strong> และลูกค้าได้ใช้บริการต่อไป ถือว่าลูกค้าประสงค์จะใช้บริการนี้แบบไม่มีกำหนดระยะเวลาตามอัตราค่าบริการเดิม และตกลงปฏิบัติตามข้อตกลงและเงื่อนไขการให้บริการของ AWN ต่อไป จนกว่าฝ่ายใดฝ่ายหนึ่งจะมีการบอกเลิก<br>
            <span class="text-slate-500 italic">2. In case the Subscriber continues to use service after the expiration of service period, it shall be deemed that the Subscriber agrees to extend the term of service indefinitely under the same terms and conditions of Service Charge and the Customer shall comply with the Terms and Condition of AWN until it is terminated by either party.</span>
          </div>
        </div>

        <div class="text-right text-[9px] text-slate-400 mt-2">หน้า 1 / 2 (Page 1 of 2)</div>
      </div>

      <!-- ================= PAGE 2 ================= -->
      <div class="quotation-page bg-white p-6 sm:p-10 rounded-xl shadow-lg border border-slate-200 text-[10px] leading-snug relative" style="width: 100%; max-width: 800px; margin: 0 auto; box-sizing: border-box;">
        
        <!-- Header Page 2 -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-300 mb-3">
          <div class="flex items-center gap-3">
            <img src="${AWN_LOGO_BASE64}" alt="AWN" style="height: 34px; width: auto;" class="shrink-0">
            <div>
              <div class="font-bold text-[11px] text-slate-900">บริษัท แอดวานซ์ ไวร์เลส เน็ทเวอร์ค จำกัด : Advanced Wireless Network Company Limited</div>
              <div class="text-[9.5px] text-slate-500">ใบเสนอราคา / QUOTATION : เลขที่ ${d.quoteNo} (วันที่ ${d.date})</div>
            </div>
          </div>
          <div class="text-right text-[9px] text-slate-400">หน้า 2 / 2 (Page 2 of 2)</div>
        </div>

        <!-- Clauses 3 to 9 -->
        <div class="space-y-2 text-slate-700">
          <div>
            <strong>3. กำหนดยืนราคา</strong> ตามรายการส่งเสริมการขายระยะเวลา 30 วัน นับแต่วันที่ระบุในใบเสนอราคานี้<br>
            <span class="text-slate-500 italic">3. This price shall be in effect until 30 days from the date of this quotation.</span>
          </div>

          <div>
            <strong>4. AWN ตกลงให้บริการตามใบเสนอราคานี้</strong> โดยมีมาตรฐานและคุณภาพการให้บริการไม่ต่ำกว่าหลักเกณฑ์ที่หน่วยงานของรัฐที่ทำหน้าที่กำกับดูแลการให้บริการดังกล่าวกำหนดไว้<br>
            <span class="text-slate-500 italic">4. AWN agrees to provide the service according to this quotation which quality of service is not less than standard and quality under the regulations as specified by government authorities controlling such service.</span>
          </div>

          <div>
            <strong>5. เงื่อนไขการให้บริการโดยละเอียด</strong> โปรดตรวจสอบจาก ข้อตกลงและเงื่อนไขการให้บริการ ที่ท่านประสงค์ใช้งาน<br>
            <span class="text-slate-500 italic">5. Please check the conditions of service you wish to apply for under the Terms and Conditions.</span>
          </div>

          <div>
            <strong>6. ลูกค้าที่ประสงค์ใช้บริการ</strong> ตามรายการส่งเสริมการขายข้างต้น ต้องลงนามตอบรับข้อเสนอรายการส่งเสริมการขายท้ายหนังสือฉบับนี้ พร้อมส่งกลับมายัง AWN ภายใน 30 วัน นับแต่วันที่ระบุในใบเสนอราคานี้ โดยถือวันเริ่มต้นใช้บริการตามที่ระบุไว้ใน “คำขอใช้บริการโทรคมนาคม” ที่ท่านประสงค์ใช้งานหรือภายใน 7 วัน นับแต่วันที่ AWN ได้ติดตั้งระบบอุปกรณ์ประกอบการให้บริการแก่ท่านแล้วเสร็จ<br>
            <span class="text-slate-500 italic">6. Customer who desires to use the service according to this Promotion Package shall sign and respond Promotion Package Proposal in the end of this quotation and send back to AWN within 30 days from the date of this quotation and the starting date shall be as specified in Telecommunication Service Application Form which the Customer applies for the service or within 7 days after complete installation as the case may be.</span>
          </div>

          <div>
            <strong>7. ลูกค้าต้องลงนามสมัครใช้บริการ</strong> ใน “คำขอใช้บริการโทรคมนาคม” ตามแบบมาตรฐานที่ AWN กำหนดไว้ ก่อนวันเริ่มต้นใช้บริการจริง หากลูกค้าไม่ปฏิบัติตามเงื่อนไขข้อนี้ AWN สงวนสิทธิ์ในการระงับการให้บริการได้ทันที<br>
            <span class="text-slate-500 italic">7. Customers shall sign in standard Telecommunication Service Application Form designated by AWN before the start of service. If the Customer fails to comply with this Clause, AWN reserves the right to suspend the service immediately.</span>
          </div>

          <div>
            <strong>8. การยกเลิกการใช้บริการก่อนครบกำหนดระยะเวลา</strong> ที่ระบุไว้ข้างต้น ให้อยู่ภายใต้บังคับของข้อตกลงและเงื่อนไขการให้บริการ บริการ Corporate Internet ที่ AWN กำหนดเป็นมาตรฐานไว้<br>
            <span class="text-slate-500 italic">8. The termination of service prior to the end of promotion package period mentioned above shall be under the conditions of Corporate Internet Service designated by AWN as standards.</span>
          </div>

          <div>
            <strong>9. ในการใช้บริการประเภทที่ AWN ต้องลงทุนจัดหาและติดตั้งอุปกรณ์ประกอบการให้บริการ</strong> เมื่อการใช้บริการนั้นได้สิ้นสุดลงไม่ว่าด้วยเหตุใด ลูกค้าต้องคืนอุปกรณ์ดังกล่าวในสภาพสมบูรณ์และสามารถใช้งานได้ตามปกติภายใน 15 วัน นับแต่วันสิ้นสุดการใช้บริการ หากเกิดความเสียหายขึ้นแก่อุปกรณ์ ลูกค้าตกลงรับผิดชอบชดใช้ค่าเสียหายตามจำนวนที่เกิดขึ้นจริงให้แก่ AWN ภายในระยะเวลาที่ระบุไว้ในใบแจ้งหนี้ ทั้งนี้ ไม่เกินราคาตลาดของค่าอุปกรณ์ดังกล่าว ณ ขณะนั้น<br>
            <span class="text-slate-500 italic">9. In case that AWN provides the goods and/or equipment for supplementation of Telecommunication Service, when the service of any circuit number is terminated by any cause, the Customers shall return the goods and/or equipment to AWN or authorized person in good and functional condition within 15 days from the termination date. If the goods and/or equipment are damaged, the Customer agrees to indemnify for such damages by the actual amount of damages to AWN within the time period specified in invoice. Such indemnification shall not exceed market price of such goods and/or equipment during that time period.</span>
          </div>
        </div>

        <!-- Signatures Box -->
        <div class="mt-6 pt-4 border-t-2 border-slate-300">
          <div class="grid grid-cols-2 gap-6 text-[10.5px]">
            <!-- Left: Bidder (Sales) -->
            <div class="space-y-2">
              <div class="font-bold text-slate-800">ขอแสดงความนับถือ/Yours sincerely,</div>
              <div class="pt-6">
                <div>ลงชื่อ/Signed .............................................................. ผู้เสนอราคา/Bidder</div>
                <div class="pl-8 font-semibold text-slate-900 mt-1">( ${d.salesName} )</div>
                <div class="pl-8 text-slate-600 text-[10px]">ตำแหน่ง/Position: ${d.salesRole}</div>
                <div class="pl-8 text-slate-600 text-[10px]">วันที่/Date : ${d.date}</div>
              </div>
            </div>

            <!-- Right: Customer Signatory -->
            <div class="space-y-2">
              <div class="font-bold text-slate-800">ข้าพเจ้าตกลงยอมรับข้อเสนอตามเงื่อนไขข้างต้นทุกประการ/<br><span class="font-normal text-[9.5px] text-slate-500">We hereby agree to Promotion Package and conditions in all respects.</span></div>
              <div class="pt-2">
                <div>ลงชื่อ/Signed .............................................................. ผู้มีอำนาจลงนาม/Authorized</div>
                <div class="pl-8 font-semibold text-slate-900 mt-1">( ..................................................................... )</div>
                <div class="pl-8 text-slate-700 text-[10px] mt-0.5">ชื่อองค์กร/Company: ${d.customerName}</div>
                <div class="pl-8 text-slate-600 text-[10px]">วันที่/Date : .......... / .......... / ..............</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

// DOWNLOAD QUOTATION PDF (VIA html2pdf)
function downloadDraftQuotationPDF() {
  if (!currentDraftQuoteData) return;
  
  showToast("กำลังประมวลผลสร้างไฟล์ PDF จากต้นฉบับ...");
  const element = document.getElementById("quotationPrintRoot");
  if (!element) {
    showToast("ไม่พบข้อมูลเอกสาร");
    return;
  }

  // Filename formatting
  const safeName = currentDraftQuoteData.customerName.replace(/[^a-zA-Z0-9\u0E00-\u0E7F]/g, "_").substring(0, 30);
  const filename = "AWN_Quotation_" + safeName + "_" + currentDraftQuoteData.quoteNo + ".pdf";

  const opt = {
    margin: [6, 6, 6, 6],
    filename: filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { 
      scale: 2, 
      useCORS: true,
      logging: false,
      scrollY: 0
    },
    jsPDF: { 
      unit: "mm", 
      format: "a4", 
      orientation: "portrait" 
    },
    pagebreak: { mode: ["css", "legacy"] }
  };

  if (typeof html2pdf !== "undefined") {
    html2pdf().set(opt).from(element).save().then(() => {
      showToast("ดาวน์โหลดใบเสนอราคา " + filename + " สำเร็จ!");
    }).catch(err => {
      console.error("PDF generation error:", err);
      window.print();
    });
  } else {
    window.print();
  }
}

// PRINT QUOTATION (VIA BROWSER NATIVE PRINT)
function printDraftQuotation() {
  const content = document.getElementById("quotationPrintRoot")?.outerHTML;
  if (!content) {
    showToast("ไม่พบข้อมูลเอกสาร");
    return;
  }

  const printWin = window.open("", "_blank", "width=900,height=800");
  printWin.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${currentDraftQuoteData.quoteNo} - Quotation</title>
      <meta charset="utf-8">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Prompt:wght@400;500;600;700&display=swap" rel="stylesheet">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        body { font-family: 'Prompt', 'Inter', sans-serif; background: #fff; margin: 0; padding: 20px; }
        @media print {
          body { padding: 0; margin: 0; }
          .quotation-page { box-shadow: none !important; border: none !important; page-break-after: always; width: 100% !important; max-width: none !important; padding: 12mm !important; }
          @page { size: A4; margin: 8mm; }
        }
      </style>
    </head>
    <body onload="window.print();">
      ${content}
    </body>
    </html>
  `);
  printWin.document.close();
}

window.openCreateDraftQuotationModal = openCreateDraftQuotationModal;
window.updateDraftQuotationPreview = updateDraftQuotationPreview;
window.downloadDraftQuotationPDF = downloadDraftQuotationPDF;
window.printDraftQuotation = printDraftQuotation;
