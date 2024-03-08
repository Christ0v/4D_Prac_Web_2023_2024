#include <iostream>

using namespace std;

int PITA(int a, int b, int c)
{
	if (a * a + b * b == c * c) {
		return 1;
	}
	else
		return 0;
}

int main()
{
	int a, b, c;
	cout << "Podaj pierwsza liczbe: " << endl;
	cin >> a;
	cout << "Podaj druga liczbe: " << endl;
	cin >> b;
	cout << "Podaj trzecia liczbe: " << endl;
	cin >> c;
	cout << "Wartosc funkcji jest rowna: " << PITA(a, b, c);
}