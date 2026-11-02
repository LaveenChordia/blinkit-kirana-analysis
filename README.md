# 🛒 Is Blinkit Actually More Expensive?

A data project comparing what the same everyday products cost on **Blinkit** (quick-commerce) and at **local kirana stores**, presented as an interactive one-page site with charts and a searchable product explorer.

## The question

Shoppers in India often assume 10-minute delivery comes with a price premium. We tested that assumption with real prices instead of opinions:

> Are products on Blinkit systematically more expensive than the same products at a kirana store, and does the answer change once you look at whole baskets and the value of time?

## Method

- **Sample:** 60 products, 12 in each of 5 categories: Snacks, Beverages, Staples, Personal Care and Basic Stationery.
- **Paired comparison:** each product was priced at both a kirana store and on Blinkit. We recorded the difference (Blinkit − Kirana) and the percentage premium.
- **Significance test:** a paired t-test on the price differences (H₀: mean difference = 0, α = 0.05).
- **Category and basket views:** average prices by category, plus 4 realistic shopping baskets, because people buy several items at once.
- **Convenience-adjusted cost:** one basket priced again with Blinkit's handling fee and an assumed value of time (₹200/hour × 18-minute delivery).

## Findings

| Metric | Result |
|---|---|
| Average kirana price | ₹123.30 |
| Average Blinkit price | ₹122.65 |
| Products cheaper or the same on Blinkit | 44 of 60 (**73.3%**) |
| Paired t-test | t ≈ −0.12, p = 0.905, so we **fail to reject H₀** |
| Baskets cheaper on Blinkit | **3 of 4** |

1. **No systematic premium.** The average difference is only ₹0.65, and the difference isn't statistically significant in this sample.
2. **Individual products vary a lot.** Some items cost much more on Blinkit and others cost less, so a single product can't tell you which channel is cheaper overall.
3. **Baskets matter more than single items.** Three of the four baskets were cheaper on Blinkit. In the convenience-adjusted example, Blinkit stayed cheaper (₹1,445 vs ₹1,719) even after adding the handling fee and the value of time.

**Takeaway:** "Is Blinkit expensive?" is the wrong question. The useful question is *"Is **my basket** cheaper on Blinkit, and how much is my time worth?"*

## Limitations

- 60 products is a small sample, and prices change over time.
- Pack sizes, brands and availability vary, which affects some comparisons.
- Blinkit fees vary by order, location and time of day.
- The ₹200/hour value of time is an assumption, and travel time to the kirana store wasn't measured for every product.
- The results describe this sample and shouldn't be generalised to every Blinkit order or every kirana store.

## What's in the site

- KPI summary and overall price comparison
- Product-level difference chart (Blinkit − Kirana)
- Category averages and basket totals
- Convenience-adjusted cost example
- Interactive explorer that filters products by category and result and sorts by price, difference or premium

## Run it

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

**Built with:** HTML, CSS, vanilla JavaScript and [Chart.js](https://www.chartjs.org/). Product data comes from Appendix A of the project report.

---

*University statistics data project.*
