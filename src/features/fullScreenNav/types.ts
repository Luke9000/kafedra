export interface ScrollNavigation {
    sections: string[];
    activeSection: number;
    scrollToSection: (index: number) => void;
  }
  