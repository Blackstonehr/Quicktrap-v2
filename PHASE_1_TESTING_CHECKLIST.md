# Phase 1 Visual Integration - Testing Checklist

**Status:** Ready for Manual Testing
**Dev Server:** http://localhost:5178 (Running)
**Build Status:** ✅ PASSED

---

## Critical-Path Testing Checklist

### ✅ Automated Tests (COMPLETED)

- [x] TypeScript compilation (0 errors)
- [x] Production build (1.77s, successful)
- [x] Hot Module Replacement (all 5 files)
- [x] Bundle size verification (+7 KB acceptable)
- [x] Code quality checks
- [x] Image path validation
- [x] Alt text verification

---

### 📋 Manual Visual Testing (USER ACTION REQUIRED)

Please open http://localhost:5178 in your browser and verify the following:

#### 1. Navigation (All Pages)
- [ ] Wordmark logo displays in navigation bar
- [ ] Logo is properly sized (height: 32px)
- [ ] Logo loads without 404 error
- [ ] Navigation links still functional

**Expected:** Professional Quicktrap wordmark logo instead of text

---

#### 2. Home Page (/)
- [ ] Hero background image displays (`hero_aerial.png`)
- [ ] Hero image covers full width
- [ ] All 4 feature icons display:
  - [ ] Flow Management icon (icon_flow.png)
  - [ ] Installation icon (icon_installation.png)
  - [ ] Structural icon (icon_structural.png)
  - [ ] Environment icon (icon_environment.png)
- [ ] Icons are 48px × 48px size
- [ ] Icons have proper spacing

**Expected:** Professional icons instead of gold placeholder boxes

---

#### 3. Product Page (/product)
- [ ] Hero background image displays (`hero_concrete.png`)
- [ ] Product render section displays below hero
- [ ] Product render image loads (`render_quicktrap.png`)
- [ ] Product render has shadow and rounded corners
- [ ] Blueprint grid pattern visible in specifications section
- [ ] Specifications table displays correctly

**Expected:** 3D product render prominently displayed, technical grid pattern in specs section

---

#### 4. Installation Page (/installation)
- [ ] Hero background image displays (`hero_grate.png`)
- [ ] Blueprint grid pattern visible in installation steps section
- [ ] Installation steps display correctly with numbered circles
- [ ] Content remains readable over grid pattern

**Expected:** Grate/drain hero image, subtle technical grid in steps section

---

#### 5. Case Studies Page (/case-studies)
- [ ] Blueprint grid pattern visible in introduction section
- [ ] First testimonial block displays before/after images
- [ ] Second testimonial block displays before/after images
- [ ] Images are `case_before.png` and `case_after.png`
- [ ] Images display side-by-side correctly

**Expected:** Updated case study images with technical grid in intro

---

## Quick Verification Commands

### Check for 404 Errors (Browser Console)
```
Open DevTools (F12) → Console tab
Look for any red errors about missing images
```

### Verify Image Loading
```
Open DevTools (F12) → Network tab → Filter: Img
Refresh page and verify all images show 200 status
```

### Check Responsive Behavior
```
Open DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
Test at: 375px (mobile), 768px (tablet), 1440px (desktop)
```

---

## Known Good States

### Image Paths (All Correct)
```
/images/logo_wordmark.png          ✓ Navigation
/images/hero_aerial.png            ✓ Home hero
/images/hero_concrete.png          ✓ Product hero
/images/hero_grate.png             ✓ Installation hero
/images/render_quicktrap.png       ✓ Product render
/images/icon_flow.png              ✓ Home feature
/images/icon_installation.png      ✓ Home feature
/images/icon_structural.png        ✓ Home feature
/images/icon_environment.png       ✓ Home feature
/images/case_before.png            ✓ Case studies
/images/case_after.png             ✓ Case studies
```

### Blueprint Grid Applications
```
Product page → Specifications section     ✓
Installation page → Steps section         ✓
Case Studies page → Introduction section  ✓
```

---

## Issue Reporting Template

If you encounter any issues, please report using this format:

```
**Page:** [Home/Product/Installation/Case Studies]
**Issue:** [Description]
**Expected:** [What should happen]
**Actual:** [What actually happens]
**Screenshot:** [If applicable]
**Browser:** [Chrome/Firefox/Safari/Edge]
**Console Errors:** [Any red errors in console]
```

---

## Success Criteria

Phase 1 is considered successful when:

- [x] All builds pass without errors ✅
- [ ] All 11 images load correctly (manual check)
- [ ] Navigation logo displays properly (manual check)
- [ ] Home page icons display (manual check)
- [ ] Product render displays (manual check)
- [ ] Blueprint grid visible in 3 sections (manual check)
- [ ] No console errors (manual check)
- [ ] Responsive behavior maintained (manual check)

---

## Next Steps After Testing

### If All Tests Pass:
1. Mark this phase as complete
2. Proceed to Phase 2 (if planned)
3. Consider deployment to staging

### If Issues Found:
1. Document issues using template above
2. Prioritize fixes (critical vs. minor)
3. Apply fixes and re-test
4. Update documentation

---

## Additional Testing (Optional)

### Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check Largest Contentful Paint (LCP)
- [ ] Verify Cumulative Layout Shift (CLS)
- [ ] Test image loading times

### Accessibility Testing
- [ ] Screen reader navigation
- [ ] Keyboard navigation
- [ ] Alt text verification
- [ ] Color contrast checks

### Cross-Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)
- [ ] Mobile browsers

---

**Testing Status:** ⏳ AWAITING MANUAL VERIFICATION

**Automated Tests:** ✅ 8/8 PASSED
**Manual Tests:** ⏳ 0/8 COMPLETED

Please complete the manual testing checklist above and report any issues found.
